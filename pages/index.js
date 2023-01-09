import Head from 'next/head'
import Image from 'next/image'
import { Inter, Lobster } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'


const inter = Inter({ subsets: ['latin'] })
const lobster = Lobster({weight: '400', subsets: ['latin']})

export default function Home() {
  return (
    <>
      <Head>
        <title>Sue's Expo Line Map</title>
        <meta name="description" content="Leaflet Exercise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <header className={styles.header}>
          <h1 className={lobster.className}>Sue's <span className={styles.blue}>Expo Line</span> Map</h1>
        </header>
        
        <main className={styles.main}>
          <Map />
        </main>
        
        <footer className={styles.footer}>
          <p className={lobster.className}>Created by Sue Lee 👻</p>
        </footer>    
    </>
  )
}
