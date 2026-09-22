'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import QrScanner from '@/components/QrScanner';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [searchQuery, setSearchQuery] = useState('');
  const [pointsToAdd, setPointsToAdd] = useState<number | ''>('');
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const [clientName, setClientName] = useState('');
  const [customDiscount, setCustomDiscount] = useState<number | ''>('');
  const [updatingInfo, setUpdatingInfo] = useState(false);

  const [showScanner, setShowScanner] = useState(false);
  const [transactions, setTransactions] = useState<any[]>([]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: adminPassword }),
    });
    if (res.ok) setIsAuthenticated(true);
    else setAuthError('Mot de passe incorrect');
  };

  const handleExportCSV = async () => {
    setLoading(true);
    const { data: cards, error } = await supabase.from('cards').select('*');

    if (error || !cards) {
      setMessage({ type: 'error', text: 'Erreur lors de l’exportation.' });
      setLoading(false);
      return;
    }

    const headers = ['N° Carte', 'Nom Client', 'Points', 'Remise VIP (%)'];
    const rows = cards.map((c) => [
      `"${c.Card_number || c.card_number || ''}"`,
      `"${c.client_name || 'Anonyme'}"`,
      c.points || 0,
      c.discount_rate || 0,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(';'), ...rows.map((e) => e.join(';'))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Export_Clients_BDR_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setMessage({ type: 'success', text: 'Fichier CSV téléchargé avec succès !' });
    setLoading(false);
  };

  const fetchTransactions = async (cardId: string) => {
    const { data } = await supabase
      .from('transactions')
      .select('*')
      .eq('card_number', cardId)
      .order('created_at', { ascending: false })
      .limit(5);
    if (data) setTransactions(data);
  };

  const selectCard = (card: any) => {
    setCurrentCard(card);
    setClientName(card.client_name || '');
    setCustomDiscount(card.discount_rate || 0);
    setSearchResults([]);
    const cardId = card.Card_number || card.card_number;
    fetchTransactions(cardId);
  };

  // Recherche intelligente : par N° de Carte, par Nom
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setMessage(null);
    setLoading(true);
    setCurrentCard(null);
    setSearchResults([]);

    const term = searchQuery.trim().toLowerCase();

    const { data, error } = await supabase.from('cards').select('*');

    if (error || !data) {
      setMessage({ type: 'error', text: 'Erreur lors de la recherche.' });
      setLoading(false);
      return;
    }

    // Filtrer par Numéro de carte OU par Nom de client
    const matches = data.filter((item: any) => {
      const num = (item.Card_number || item.card_number || '').toLowerCase();
      const name = (item.client_name || '').toLowerCase();
      return num.includes(term) || name.includes(term);
    });

    if (matches.length === 0) {
      setMessage({ type: 'error', text: 'Aucun client ou carte trouvé.' });
    } else if (matches.length === 1) {
      selectCard(matches[0]);
    } else {
      setSearchResults(matches);
    }

    setLoading(false);
  };

  const handleScanSuccess = (scannedCardNumber: string) => {
    setShowScanner(false);
    setSearchQuery(scannedCardNumber);
    // Recherche automatique du QR scanné
    searchCardByNumber(scannedCardNumber);
  };

  const searchCardByNumber = async (num: string) => {
    setLoading(true);
    const formatted = num.trim().toUpperCase();
    const { data } = await supabase.from('cards').select('*');
    const found = data?.find(
      (item: any) =>
        item.Card_number?.toUpperCase() === formatted ||
        item.card_number?.toUpperCase() === formatted
    );
    if (found) selectCard(found);
    else setMessage({ type: 'error', text: 'Carte non trouvée.' });
    setLoading(false);
  };

  const handleUpdatePoints = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCard || pointsToAdd === '') return;
    setLoading(true);
    setMessage(null);

    const newPoints = Number(currentCard.points || 0) + Number(pointsToAdd);
    const colName = currentCard.Card_number ? 'Card_number' : 'card_number';
    const cardId = currentCard.Card_number || currentCard.card_number;

    const { error } = await supabase
      .from('cards')
      .update({ points: newPoints })
      .eq(colName, cardId);

    if (error) {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour des points.' });
    } else {
      setMessage({ type: 'success', text: `Points mis à jour ! Nouveau solde : ${newPoints} pts` });
      setCurrentCard({ ...currentCard, points: newPoints });

      await supabase.from('transactions').insert({
        card_number: cardId,
        type: 'POINTS',
        description: Number(pointsToAdd) > 0 ? `Ajout de points en caisse` : `Utilisation/Retrait de points`,
        amount: Number(pointsToAdd),
      });
      fetchTransactions(cardId);

      setPointsToAdd('');
    }
    setLoading(false);
  };

  const handleUpdateClientInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentCard) return;
    setUpdatingInfo(true);
    setMessage(null);

    const colName = currentCard.Card_number ? 'Card_number' : 'card_number';
    const cardId = currentCard.Card_number || currentCard.card_number;
    const discountValue = Number(customDiscount || 0);

    const { error } = await supabase
      .from('cards')
      .update({ client_name: clientName, discount_rate: discountValue })
      .eq(colName, cardId);

    if (error) {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour.' });
    } else {
      setMessage({ type: 'success', text: `Profil mis à jour : ${clientName || 'Anonyme'} (-${discountValue}%)` });
      setCurrentCard({ ...currentCard, client_name: clientName, discount_rate: discountValue });

      await supabase.from('transactions').insert({
        card_number: cardId,
        type: 'PROFIL',
        description: `Mise à jour profil : ${clientName || 'Anonyme'}, Remise -${discountValue}%`,
        amount: discountValue,
      });
      fetchTransactions(cardId);
    }
    setUpdatingInfo(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
          <h1 className="text-xl font-bold text-center text-red-600 uppercase tracking-wide mb-1">Espace Caisse / Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4 mt-6">
            <input
              type="password"
              placeholder="Mot de passe Caisse"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              required
            />
            {authError && <div className="p-2 rounded-lg bg-red-100 text-red-700 text-xs text-center">{authError}</div>}
            <button type="submit" className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-bold text-white shadow hover:bg-red-700">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
      {showScanner && <QrScanner onScanSuccess={handleScanSuccess} onClose={() => setShowScanner(false)} />}

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl my-4">
        <h1 className="text-xl font-bold text-center text-red-600 uppercase tracking-wide">Espace Caisse / Admin</h1>
        <p className="text-xs text-center text-gray-500 mb-4">Boucherie Poissonnerie du Rail</p>

        <button
          type="button"
          onClick={handleExportCSV}
          disabled={loading}
          className="w-full mb-4 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 py-2 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
        >
          📊 Exporter la liste des clients (CSV / Excel)
        </button>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm font-medium text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <button onClick={() => setShowScanner(true)} className="w-full mb-4 flex items-center justify-center gap-2 rounded-xl bg-red-50 border border-red-200 py-3 text-sm font-bold text-red-600 hover:bg-red-100">
          📷 Scanner un QR Code client
        </button>

        {/* Formulaire de recherche polyvalent */}
        <form onSubmit={handleSearch} className="mb-6 border-t border-gray-200 pt-4">
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">🔍 Recherche (N° Carte ou Nom client)</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="ex: BDR-000001 ou Dupont"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              required
            />
            <button type="submit" disabled={loading} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-50">Chercher</button>
          </div>
        </form>

        {/* Résultats multiples si recherche par Nom */}
        {searchResults.length > 1 && (
          <div className="mb-6 border-t border-gray-200 pt-3 space-y-2">
            <span className="block text-xs font-bold text-gray-500 uppercase">Plusieurs clients trouvés ({searchResults.length}) :</span>
            {searchResults.map((res) => (
              <button
                key={res.id || res.Card_number || res.card_number}
                onClick={() => selectCard(res)}
                className="w-full text-left p-2.5 bg-gray-50 hover:bg-red-50 border border-gray-200 rounded-lg flex justify-between items-center transition-colors"
              >
                <div>
                  <span className="font-bold text-xs text-gray-800 block">{res.client_name || 'Client Anonyme'}</span>
                  <span className="font-mono text-[11px] text-gray-500">{res.Card_number || res.card_number}</span>
                </div>
                <span className="text-xs font-bold text-amber-600">{res.points || 0} pts</span>
              </button>
            ))}
          </div>
        )}

        {currentCard && (
          <div className="border-t border-gray-200 pt-4 space-y-4">
            
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div>
                <span className="block text-xs text-gray-500">Carte sélectionnée</span>
                <span className="font-mono font-bold text-gray-800">{currentCard.Card_number || currentCard.card_number}</span>
                {currentCard.client_name && <span className="block text-xs font-bold text-purple-900 mt-0.5">👤 {currentCard.client_name}</span>}
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500">Solde actuel</span>
                <span className="text-lg font-bold text-amber-600">{currentCard.points || 0} pts</span>
              </div>
            </div>

            {currentCard.discount_rate > 0 && (
              <div className="p-2 bg-purple-50 border border-purple-200 rounded-lg text-purple-900 text-xs font-bold text-center">
                ⭐ CLIENT VIP : Remise auto de -{currentCard.discount_rate}%
              </div>
            )}

            <form onSubmit={handleUpdatePoints} className="space-y-3 pt-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Points à ajouter (ex: 5 ou -2)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Points" value={pointsToAdd} onChange={(e) => setPointsToAdd(e.target.value === '' ? '' : Number(e.target.value))} className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none" required />
                <button type="submit" disabled={loading} className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white shadow hover:bg-red-700 disabled:opacity-50">Appliquer</button>
              </div>
            </form>

            <form onSubmit={handleUpdateClientInfo} className="border-t border-gray-200 pt-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">👤 Nom</label>
                  <input type="text" placeholder="Nom du client" value={clientName} onChange={(e) => setClientName(e.target.value)} className="w-full rounded-lg border border-gray-300 px-2 py-2 text-sm focus:border-purple-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-purple-900 uppercase mb-1">⚙️ Remise (%)</label>
                  <div className="flex gap-2">
                    <input type="number" min="0" max="100" placeholder="%" value={customDiscount} onChange={(e) => setCustomDiscount(e.target.value === '' ? '' : Number(e.target.value))} className="flex-1 rounded-lg border border-gray-300 px-2 py-2 text-sm focus:border-purple-500 focus:outline-none" />
                    <button type="submit" disabled={updatingInfo} className="rounded-lg bg-purple-700 px-3 py-2 text-sm font-bold text-white hover:bg-purple-800 disabled:opacity-50">OK</button>
                  </div>
                </div>
              </div>
            </form>

            {transactions.length > 0 && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3 text-center">Dernières actions sur cette carte</h3>
                <div className="space-y-2">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex justify-between items-center bg-white p-2 rounded border border-gray-100 text-xs shadow-sm">
                      <div>
                        <span className="font-bold text-gray-700 block">{tx.description}</span>
                        <span className="text-gray-400">
                          {new Date(tx.created_at).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute:'2-digit' })}
                        </span>
                      </div>
                      {tx.type === 'POINTS' && (
                        <span className={`font-bold px-2 py-1 rounded ${tx.amount > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {tx.amount > 0 ? `+${tx.amount}` : tx.amount} pts
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}