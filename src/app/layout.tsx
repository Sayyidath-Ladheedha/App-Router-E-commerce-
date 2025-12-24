import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReduxProvider from '@/components/ReduxProvider';

import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'BuYwaY Product details',
    template: '%s | BuYwaY',
  },
  description: 'BuYwaY – Best online shopping platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        <Footer />
      </body>
    </html>
  );
}
