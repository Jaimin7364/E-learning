import type { AppProps } from "next/app";

export default function Myapp({Component, pageProps}: AppProps){
    return <Component {...pageProps} />
}