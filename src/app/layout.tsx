import { DM_Sans, Ubuntu} from "next/font/google";
import type { ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/main.css";
import "./assets/swiper.css";

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-font',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Orbia - AI Agency & Technology React NextJS Template',
    template: '%s | Orbia - AI Agency & Technology React NextJS Template',
  },
  description: 'Orbia - AI Agency & Technology React NextJS Template',
  openGraph: {
    title: 'Orbia - AI Agency & Technology React NextJS Template',
    description: 'Orbia - AI Agency & Technology React NextJS Template',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${ubuntu.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
