import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-light">
        <Head>
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            
            <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500&family=Righteous&family=Open+Sans&display=swap" rel="stylesheet"></link>
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
