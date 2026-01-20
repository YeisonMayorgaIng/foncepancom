/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-sync-scripts */
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document?.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
            integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
            rel='prerender'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap'
            rel='prerender'
          />
          <link
            rel='stylesheet'
            href='https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async defer src='https://smtpjs.com/v3/smtp.js' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
