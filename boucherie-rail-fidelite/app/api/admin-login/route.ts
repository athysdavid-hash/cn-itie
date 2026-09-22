import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { password } = await request.json();
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 jours
      path: '/',
    });
    return response;
  }

  return NextResponse.json({ success: false, message: 'Mot de passe incorrect' }, { status: 401 });
}