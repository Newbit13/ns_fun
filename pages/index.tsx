import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Cart from '../component/Card'
import Layout from '../component/Layout'

export default function Home({gamelist}) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>唯秋GAME</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {
            gamelist.map((game)=>{
              return (
                <div className={styles.card_box} key={game.id}>
                  <Cart />
                </div>
              )
            })
          }
        </main>
      </div>
    </Layout>  
  )
}

export async function getStaticProps() {
  const res = await fetch('https://service-75oyrwi6-1256879764.gz.apigw.tencentcs.com/release/gamelist')
  const gamelist = await res.json();
  
  return {
    props: {
      gamelist,
    },
  }
}
