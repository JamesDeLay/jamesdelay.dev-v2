import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
<<<<<<< Updated upstream
      <Html lang="en">
        <Head />
=======
      <Html lang="en" className="bg-light">
        <Head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.0/styles/github.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&family=Righteous&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
>>>>>>> Stashed changes
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
