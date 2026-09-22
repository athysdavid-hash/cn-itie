import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Boucherie du Rail - Fidélité',
    short_name: 'BDR Fidélité',
    description: 'Carte de fidélité Boucherie Poissonnerie du Rail',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#dc2626',
    icons: [],
  };
}