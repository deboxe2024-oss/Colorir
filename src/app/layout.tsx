import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { FacebookPixel } from '@/components/facebook-pixel';
import { UtmfyPixel } from '@/components/utmify-pixel';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Clubinho da Bíblia Kids Devotionals',
  description: 'Uma jornada de fé, aprendizado e conexão em família — começando hoje mesmo!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        ></Script>
      </head>
      <body className="font-body antialiased">
        <FacebookPixel />
        <UtmfyPixel />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
