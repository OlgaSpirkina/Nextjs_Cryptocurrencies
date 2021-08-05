import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
export default function Home({broadInfo, listOfCoins}) {
  console.log(listOfCoins);
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Shayp Coins</title>
        <meta name="description" content="Criptocurrency display web application" />
        <link rel="icon" href="/logoshayp.png" />
      </Head>
      <Navbar broadInfo={broadInfo}/>
      <h1>Welcome to Shayp!</h1>
      <main>
        <Table listOfCoins={listOfCoins}/>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const [broadInfoRes, listOfCoinsRes] = await Promise.all([
    fetch('https://api.coinpaprika.com/v1/global'),
    fetch('https://api.coinpaprika.com/v1/tickers')
  ]);
  const [broadInfo, listOfCoins] = await Promise.all([
    broadInfoRes.json(),
    listOfCoinsRes.json()
  ]);
  return { props: {broadInfo, listOfCoins} };
}
