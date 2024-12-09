import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Capetown - #1 Guide for the Best Places to Visit and Things to Do in Capetown',
  description: 'Discover top-rated restaurants, popular malls and must-try activities in the heart of Capetown. Each place is expertly rated to bring you the ultimate Capetown guide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}