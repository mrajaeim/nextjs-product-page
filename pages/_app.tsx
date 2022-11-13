import '../styles/globals.scss'
import Head from "next/head";
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,900;1,400;1,700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Component {...pageProps} />
    </>
}
