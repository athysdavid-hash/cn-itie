'use client';

import { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface QrScannerProps {
  onScanSuccess: (decodedText: string) => void;
  onClose: () => void;
}

export default function QrScanner({ onScanSuccess, onClose }: QrScannerProps) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(
      (decodedText) => {
        // Extraire le numéro de carte si l'URL complète est dans le QR code
        // Ex: https://.../card/BDR-000001 -> extrait BDR-000001
        let cardNumber = decodedText;
        if (decodedText.includes('/card/')) {
          cardNumber = decodedText.split('/card/')[1];
        } else if (decodedText.includes('/')) {
          cardNumber = decodedText.split('/').pop() || decodedText;
        }

        scanner.clear();
        onScanSuccess(cardNumber);
      },
      (errorMessage) => {
        // Erreurs de lecture continues ignorées silencieusement
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [onScanSuccess]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-bold uppercase text-gray-800">Scanner la carte client</h2>
          <button
            onClick={onClose}
            className="rounded-lg bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-300"
          >
            Fermer
          </button>
        </div>
        <div id="reader" className="overflow-hidden rounded-xl border border-gray-200"></div>
      </div>
    </div>
  );
}