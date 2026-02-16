import { Inter, Open_Sans } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-open-sans',
});
