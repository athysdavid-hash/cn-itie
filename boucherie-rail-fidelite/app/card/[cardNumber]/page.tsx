'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';

type CardData = {
  Card_number: string;
  points: number;
  status: string;
};

export default function CardPage() {
  const params = useParams();
  const cardNumber = params.cardNumber as string;

  const [card, setCard] = useState<CardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCard() {
      if (!cardNumber) return;

      // Utilisation d'une requête souple sans guillemets stricts
      const { data, error } = await supabase
        .from('cards')
        .select('*');

      if (error) {
        console.error("Détail erreur Supabase :", error);
        setError("Erreur Supabase : " + error.message);
        setLoading(false);
        return;
      }

      // Filtrage côté client pour contourner la sensibilité à la casse de la colonne
      const foundCard = data?.find(
        (item: any) => item.Card_number === cardNumber || item.card_number === cardNumber
      );

      if (!foundCard) {
        setError('Carte introuvable ou invalide.');
      } else {
        setCard({
          Card_number: foundCard.Card_number || foundCard.card_number,
          points: foundCard.points,
          status: foundCard.status,
        });
      }
      setLoading(false);
    }

    fetchCard();
  }, [cardNumber]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-lg font-medium text-gray-600">Chargement de votre carte...</p>
      </div>
    );
  }

  if (error || !card) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-lg">
          <h1 className="text-xl font-bold text-red-600">Erreur</h1>
          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4 font-sans text-white">
      <div className="w-full max-w-sm rounded-3xl border border-gray-800 bg-gray-950 p-6 shadow-2xl text-center">
        <h1 className="text-2xl font-black uppercase tracking-wider text-red-500">
  Boucherie Poissonnerie du Rail
</h1>
        <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
          Programme de fidélité
        </p>

        <div className="my-8 rounded-2xl bg-gray-900 p-6 border border-gray-800">
          <span className="block text-5xl font-extrabold text-amber-400">
            {card.points}
          </span>
          <span className="mt-1 block text-sm font-semibold uppercase tracking-wider text-gray-300">
            {card.points <= 1 ? 'Point' : 'Points'}
          </span>
        </div>

        <div className="text-xs text-gray-400">
          N° de carte : <span className="font-mono font-bold text-white">{card.Card_number}</span>
        </div>
      </div>
    </div>
  );
}