import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollObserver from '../components/ScrollObserver';

export const metadata = {
  title: 'Khushi Velvet | Luxury Fabric Manufacturer',
  description: 'Manufacturer and importer of high-quality Velvet Fabrics including Micro 9000, 11000, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollObserver />
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
