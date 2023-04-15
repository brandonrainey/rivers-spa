import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Header from '../components/Header'
import HeroBanner from '@/components/HeroBanner'
import Panels from '@/components/Panels'
import Footer from '@/components/Footer'
import Hours from '@/components/Hours'



export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Rivers Spa</title>
        <meta name="description" content="rivers spa website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />
      <Hours />
      <Panels />
      <Footer />
    </div>
  )
}
