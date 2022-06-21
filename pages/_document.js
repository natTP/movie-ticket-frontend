import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans Thai', sans-serif;
  }

  html, body {
    height: 100%;
  }
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyles />
                <App {...props} />
              </>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
