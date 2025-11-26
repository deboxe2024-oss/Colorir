'use client';

import Script from 'next/script';

const PIXEL_ID = "69271bf7efaa3d2cab70de68";

export function UtmfyPixel() {
  return (
    <>
      <Script id="utmify-pixel-config" strategy="afterInteractive">
        {`
          window.pixelId = "${PIXEL_ID}";
        `}
      </Script>
      <Script 
        id="utmify-pixel-script"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
        async
        defer
      />
    </>
  );
}
