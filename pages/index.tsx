import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Cart from '../component/Card'
import Layout from '../component/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>唯秋GAME</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.card_box}>
            <Cart />
          </div>
          <div className={styles.card_box}>
            <Cart />
          </div>
          <div className={styles.card_box}>
            <Cart />
          </div>
          <div className={styles.card_box}>
            <Cart />
          </div>
          <div className={styles.card_box}>
            <Cart />
          </div>
        </main>
      </div>
    </Layout>  
  )
}
