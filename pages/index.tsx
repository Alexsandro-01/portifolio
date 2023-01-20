import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Social from '../components/Social'
import Hello from '../components/Hello'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import OthersProjects from '../components/OthersProjects'
import Certificates from '../components/Certificates'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexsandro</title>
        <meta name="description" content="Portifólio do Alexsandro Pinheiro" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Alex-logo.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Social />
        <Hello />
        <AboutMe />
        <Projects />
        <OthersProjects />
        <Certificates />
      </main>
      <Footer />
    </>
  )
}
