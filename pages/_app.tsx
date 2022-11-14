import '../styles/globals.scss'
import Head from "next/head";
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import AppProvider from "../provider/AppProvider";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                  rel="stylesheet"/>
            <link rel="icon" href="https://hs3-cf.behtarino.com/static/images/behtarino-web/behtarino-logo.png"/>
            <link rel="apple-touch-icon" href="/Assets/pwa/apple-touch-icon.png"/>
        </Head>
        <NextNProgress color="#f94467" stopDelayMs={800}/>
        <AppProvider>
            <Component {...pageProps} />
        </AppProvider>
    </>
}
