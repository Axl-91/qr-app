'use client';

import { useQRCode } from 'next-qrcode';

export function QrCode({ link }: { link: string }) {
  const { Canvas } = useQRCode();

  return (
    <>
      <h1> QR code for {link} </h1>

      <div className="center-div">
        <Canvas
          text={link}
          options={{
            errorCorrectionLevel: 'M',
            margin: 3,
            scale: 4,
            width: 500,
          }}
        />
      </div>
    </>
  );
}

