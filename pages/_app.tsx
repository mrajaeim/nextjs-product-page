import '../styles/globals.scss'
import Head from "next/head";
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,900;1,400;1,700&display=swap"
                rel="stylesheet"
            />
            <link rel="icon" href="https://hs3-cf.behtarino.com/static/images/behtarino-web/behtarino-logo.png" />
            <link rel="apple-touch-icon" href="/Assets/pwa/apple-touch-icon.png" />
            <meta name="msapplication-TileColor" content="#0F197D" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </Head>
        <Component {...pageProps} />
    </>
}
