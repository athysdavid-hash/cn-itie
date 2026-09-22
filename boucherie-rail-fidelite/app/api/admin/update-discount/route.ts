import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { cardId, discountRate } = await request.json();

    if (!cardId || discountRate === undefined || discountRate < 0 || discountRate > 100) {
      return NextResponse.json({ message: 'Taux de réduction invalide' }, { status: 400 });
    }

    // TODO: Mettre à jour en BDD si nécessaire
    return NextResponse.json({
      success: true,
      message: 'Taux de réduction mis à jour avec succès',
      discountRate,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}