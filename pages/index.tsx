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
            gamelist.length > 0 && gamelist.map((game)=>{
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
  const res = await fetch('http://localhost:3000/product/list')
  let jsonData = await res.json();
  let gamelist = [];

  if(jsonData.code == 200){
    gamelist = jsonData.data
  }
  
  return {
    props: {
      gamelist,
    },
  }
}
