import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import Graph from '../components/LinegGraph';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Liquidity</h1>
        <h1 className={styles.caption}>$3.46B <span className={styles.text}>+3.64%</span></h1>
        <Graph/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
