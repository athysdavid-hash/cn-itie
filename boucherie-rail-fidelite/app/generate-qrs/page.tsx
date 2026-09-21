'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function GenerateQRsPage() {
  // Remplace par ton vrai domaine une fois le site hébergé en ligne
  const [baseUrl, setBaseUrl] = useState('http://localhost:3000');

  // Génération de la liste BDR-000001 à BDR-000100
  const cards = Array.from({ length: 100 }, (_, i) => {
    const num = String(i + 1).padStart(6, '0');
    return `BDR-${num}`;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-8">
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Générateur de QR Codes - Boucherie Poissonnerie du Rail
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          Utilisez cette page pour imprimer ou exporter les 100 QR Codes destinés aux cartes PVC.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="text-xs font-semibold uppercase text-gray-700">
            URL de base du site :
          </label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
            placeholder="https://votre-domaine.com"
          />
          <button
            onClick={() => window.print()}
            className="bg-red-600 text-white font-bold px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition"
          >
            Imprimer / Exporter en PDF
          </button>
        </div>
      </div>

      {/* Grille des 100 QR Codes */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {cards.map((cardNum) => {
          const cardUrl = `${baseUrl}/card/${cardNum}`;
          return (
            <div
              key={cardNum}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center"
            >
              <QRCodeSVG value={cardUrl} size={140} level="H" includeMargin={true} />
              <span className="mt-3 font-mono font-bold text-sm text-gray-800">
                {cardNum}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}