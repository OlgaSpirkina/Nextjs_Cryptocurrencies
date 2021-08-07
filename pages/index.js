import Table from '../components/Table'
import CoinGlobalInfo from '../components/CoinGlobalInfo'
import styles from '../styles/Home.module.css'
export default function Home({ broadInfo, listOfCoins }) {
  return (
    <div className={styles.main_container}>
    <CoinGlobalInfo broadInfo={broadInfo}/>
      <h1>Welcome to Shayp!</h1>
      <main>
        <Table listOfCoins={listOfCoins}/>
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//   const listOfCoinsRes = await fetch('https://api.coinpaprika.com/v1/tickers')
//   const listOfCoins = await listOfCoinsRes.json()
//   if (!listOfCoins) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: { listOfCoins }
//   }
// }

export async function getStaticProps() {
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
