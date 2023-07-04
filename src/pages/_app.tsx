import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import 'swiper/css/bundle'


export default function App({ Component, pageProps }: AppProps) {
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>
}
