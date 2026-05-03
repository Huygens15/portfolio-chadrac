import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { Spline_Sans } from 'next/font/google';

const splineSans = Spline_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio professionnel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={splineSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}