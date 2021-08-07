import CoinGlobalInfo from '../components/CoinGlobalInfo'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

// Table is called dynamicly because it's display depends on media queries
const DynamicTable = dynamic(() => import('../components/Table'), { ssr: false })
function DynamicTableCaller({ listOfCoins }) {
    return <DynamicTable listOfCoins={listOfCoins} />
}

export default function Home({ broadInfo, listOfCoins }) {
  return (
    <div className={styles.main_container}>
    <CoinGlobalInfo broadInfo={broadInfo}/>
      <h1>Welcome to Shayp!</h1>
      <main>
        <DynamicTableCaller listOfCoins={listOfCoins}/>
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
