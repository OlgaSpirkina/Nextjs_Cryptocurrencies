import Head from 'next/head'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'
export default function Home({broadInfo}) {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Shayp Coins</title>
        <meta name="description" content="Criptocurrency display web application" />
        <link rel="icon" href="/logoshayp.png" />
      </Head>
      <Navbar broadInfo={broadInfo}/>
      <h1>Welcome to Shayp!</h1>
      <Table />
    </div>
  )
}

export async function getServerSideProps() {
  const [broadInfoRes, converterRes] = await Promise.all([
    fetch('https://api.coinpaprika.com/v1/global'),
    fetch('https://api.coinpaprika.com/v1/price-converter')
  ]);
  const [broadInfo, converter] = await Promise.all([
    broadInfoRes.json(),
    converterRes.json()
  ]);
  return { props: {broadInfo, converter} };
}
