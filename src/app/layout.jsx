import '../styles/globals.css';

export const metadata = {
  title: 'Sakura Maison — Restaurant Asiatique à Paris',
  description: 'Restaurant asiatique au cœur de Paris. Menu japonais, thaïlandais et vietnamien. Réservations au +33 (0)1 42 71 00 22.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
