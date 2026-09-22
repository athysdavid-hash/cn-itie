'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import QRCode from 'react-qrcode-logo';

export default function ClientPage() {
  const [cardNumber, setCardNumber] = useState<string | null>(null);
  const [clientName, setClientName] = useState<string>('');
  const [points, setPoints] = useState<number>(0);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let storedCard = localStorage.getItem('bdr_card_number');
    if (!storedCard) {
      storedCard = 'BDR-' + Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem('bdr_card_number', storedCard);
    }
    setCardNumber(storedCard);
    fetchCardData(storedCard);

    const subscription = supabase
      .channel('public:cards')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'cards', filter: `card_number=eq.${storedCard}` },
        (payload: any) => {
          if (payload.new) {
            setPoints(payload.new.points || 0);
            setClientName(payload.new.client_name || '');
            setDiscountRate(payload.new.discount_rate || 0);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchCardData = async (num: string) => {
    setLoading(true);
    let { data, error } = await supabase
      .from('cards')
      .select('*')
      .eq('card_number', num)
      .single();

    if (!data) {
      const res = await supabase
        .from('cards')
        .insert([{ card_number: num, points: 0, client_name: '', discount_rate: 0 }])
        .select()
        .single();
      data = res.data;
    }

    if (data) {
      setPoints(data.points || 0);
      setClientName(data.client_name || '');
      setDiscountRate(data.discount_rate || 0);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
        <p className="text-gray-500 text-sm animate-pulse">Chargement de votre carte...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 font-sans text-gray-900">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-gray-100 relative overflow-hidden">
        
        {/* En-tête de la boucherie */}
        <div className="text-center mb-4">
          <h1 className="text-lg font-black tracking-wider text-red-600 uppercase">Boucherie Poissonnerie</h1>
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">DU RAIL</p>
        </div>

        {/* Bannière d'aide PWA Mobile */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-2.5 rounded-xl text-center mb-4">
          📲 <strong>Installer l'application :</strong> Appuyez sur le menu de votre navigateur (ou <i>Partager</i> sur iPhone) puis <strong>« Ajouter à l'écran d'accueil »</strong>.
        </div>

        {/* Nom du client si défini */}
        {clientName && (
          <div className="mb-4 text-center bg-gray-50 py-2 rounded-xl border border-gray-100">
            <span className="text-xs text-gray-500 block">Titulaire de la carte</span>
            <span className="text-sm font-bold text-gray-800">{clientName}</span>
          </div>
        )}

        {/* Badge VIP si remise active */}
        {discountRate > 0 && (
          <div className="mb-4 p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-purple-900 text-xs font-bold text-center animate-pulse">
            ⭐ STATUT VIP : -{discountRate}% de remise automatique !
          </div>
        )}

        {/* QR Code dynamique */}
        <div className="flex flex-col items-center justify-center my-6 p-4 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <QRCode
              value={cardNumber || ''}
              size={180}
              fgColor="#111827"
              qrStyle="squares"
              quietZone={10}
            />
          </div>
          <span className="mt-3 font-mono text-xs font-bold text-gray-500 tracking-wider">
            {cardNumber}
          </span>
        </div>

        {/* Solde de points */}
        <div className="rounded-2xl bg-gradient-to-r from-red-600 to-red-700 p-4 text-white text-center shadow-md">
          <span className="block text-xs font-medium uppercase tracking-wider text-red-100">Solde de fidélité</span>
          <span className="text-3xl font-black mt-0.5 block">{points} pts</span>
        </div>

        <p className="text-[10px] text-center text-gray-400 mt-4">
          Présentez ce QR Code en caisse lors de vos achats.
        </p>
      </div>
    </div>
  );
}