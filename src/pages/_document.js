import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/assets/nido-asset-2.png'
					/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
