import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div style={{margin:" 10vw 80vh"}} >
  
 <Component {...pageProps}   />
  </div>
}
