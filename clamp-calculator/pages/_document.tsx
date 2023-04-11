import Document, { Html, Head, Main, NextScript } from "next/document";

const fonts = ["/fonts/lobster.woff2", "/fonts/inter.woff2"];

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          {fonts.map((font) => (
            <link
              key={font}
              as="font"
              crossOrigin="anonymous"
              href={font}
              type="font/woff2"
              rel="preload"
            />
          ))}
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
