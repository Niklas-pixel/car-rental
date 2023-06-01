import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import {Dancing_Script} from "next/font/google"

const dance = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dance',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${dance.variable} font-dance`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>

  ) 
}
