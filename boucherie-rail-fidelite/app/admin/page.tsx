'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import QrScanner from '@/components/QrScanner';

export default function AdminPage() {
  // États pour l'authentification Admin
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // États pour la gestion de la carte et des points
  const [cardNumber, setCardNumber] = useState('');
  const [pointsToAdd, setPointsToAdd] = useState<number | ''>('');
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // État pour afficher/masquer le scanner QR
  const [showScanner, setShowScanner] = useState(false);

  // Gestion de la connexion Administrateur
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    const res = await fetch('/api/admin-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: adminPassword }),
    });

    if (res.ok) {
      setIsAuthenticated(true);
    } else {
      setAuthError('Mot de passe incorrect');
    }
  };

  // Fonction de recherche générique
  const searchCard = async (numberToSearch: string) => {
    setMessage(null);
    setLoading(true);

    const formattedCardNumber = numberToSearch.trim().toUpperCase();

    const { data, error } = await supabase
      .from('cards')
      .select('*');

    if (error) {
      setMessage({ type: 'error', text: 'Erreur lors de la recherche.' });
      setLoading(false);
      return;
    }

    const foundCard = data?.find(
      (item: any) =>
        item.Card_number?.toUpperCase() === formattedCardNumber ||
        item.card_number?.toUpperCase() === formattedCardNumber
    );

    if (!foundCard) {
      setMessage({ type: 'error', text: 'Carte non trouvée dans la base.' });
      setCurrentCard(null);
    } else {
      setCurrentCard(foundCard);
    }

    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchCard(cardNumber);
  };

  // Callback quand un QR code est scanné
  const handleScanSuccess = (scannedCardNumber: string) => {
    setShowScanner(false);
    setCardNumber(scannedCardNumber);
    searchCard(scannedCardNumber);
  };

  // Mettre à jour les points
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
      setMessage({
        type: 'success',
        text: `Points mis à jour ! Nouveau solde : ${newPoints} pts`,
      });
      setCurrentCard({ ...currentCard, points: newPoints });
      setPointsToAdd('');
    }

    setLoading(false);
  };

  // ÉCRAN 1 : FORMULAIRE DE CONNEXION
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
          <h1 className="text-xl font-bold text-center text-red-600 uppercase tracking-wide mb-1">
            Espace Caisse / Admin
          </h1>
          <p className="text-xs text-center text-gray-500 mb-6">
            Saisissez le mot de passe pour accéder à la gestion des points.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Mot de passe Caisse
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
                required
              />
            </div>

            {authError && (
              <div className="p-2.5 rounded-lg bg-red-100 text-red-700 text-xs font-medium text-center">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-bold text-white shadow hover:bg-red-700"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ÉCRAN 2 : INTERFACE CAISSE AVEC BOUTON SCANNER
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
      {showScanner && (
        <QrScanner
          onScanSuccess={handleScanSuccess}
          onClose={() => setShowScanner(false)}
        />
      )}

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h1 className="text-xl font-bold text-center text-red-600 uppercase tracking-wide">
          Espace Caisse / Admin
        </h1>
        <p className="text-xs text-center text-gray-500 mb-6">
          Boucherie Poissonnerie du Rail
        </p>

        {/* Message d'état */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm font-medium text-center ${
              message.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Bouton pour ouvrir la caméra */}
        <button
          type="button"
          onClick={() => setShowScanner(true)}
          className="w-full mb-4 flex items-center justify-center gap-2 rounded-xl bg-red-50 border border-red-200 py-3 text-sm font-bold text-red-600 hover:bg-red-100 transition-colors"
        >
          📷 Scanner un QR Code client
        </button>

        <div className="relative my-4 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
          <span className="relative bg-white px-2 text-xs text-gray-400 uppercase">ou saisie manuelle</span>
        </div>

        {/* Formulaire de recherche manuelle */}
        <form onSubmit={handleSearch} className="mb-6">
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
            N° de carte client
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="ex: BDR-000001"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 disabled:opacity-50"
            >
              Chercher
            </button>
          </div>
        </form>

        {/* Détails de la carte et Ajout de points */}
        {currentCard && (
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-4">
              <div>
                <span className="block text-xs text-gray-500">Carte sélectionnée</span>
                <span className="font-mono font-bold text-gray-800">
                  {currentCard.Card_number || currentCard.card_number}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500">Solde actuel</span>
                <span className="text-lg font-bold text-amber-600">
                  {currentCard.points} pts
                </span>
              </div>
            </div>

            <form onSubmit={handleUpdatePoints} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                  Points à ajouter (ex: 5 ou -2)
                </label>
                <input
                  type="number"
                  placeholder="Nombre de points"
                  value={pointsToAdd}
                  onChange={(e) =>
                    setPointsToAdd(e.target.value === '' ? '' : Number(e.target.value))
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-red-600 py-2.5 text-sm font-bold text-white shadow hover:bg-red-700 disabled:opacity-50"
              >
                Valider la mise à jour
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}