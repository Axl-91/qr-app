'use client'

import { QrCode } from "./components/qr";
import { FormEvent, useState } from "react";

export default function Home() {
  const [link, setLink] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted)
  }

  return (
    <main>
      <div className="center-div">
        <form onSubmit={handleSubmit}>
          {isSubmitted ?
            <button type="submit">New QR Code</button>
            :
            <>
              <div className="center-div">
                <h1> Select the link for the QR code </h1>
              </div>
              <input type="text" placeholder="https://google.com" onChange={(e) => setLink(e.target.value)} required />
              <button type="submit">Generate</button>
            </>
          }
        </form>
      </div>
      {isSubmitted ?
        <QrCode link={link} />
        :
        null
      }

    </main >
  );
}
