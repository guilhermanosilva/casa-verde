import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@900&family=Montserrat:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <div id='modal-root' />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
