import CoinGlobalInfo from '../components/CoinGlobalInfo'
import React, { useState, useEffect } from 'react'
import MainParagraph from '../components/MainParagraph'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'

// Table is called dynamicly because the way it's displayed depends on media queries
const DynamicTable = dynamic(() => import('../components/Table'), { ssr: false })
function DynamicTableCaller({ listOfCoins }) {
    return <DynamicTable listOfCoins={listOfCoins} />
}
export default function Home({ broadInfo, listOfCoins }) {

  return (
    <div className={styles.main_container}>
    <MainParagraph prop={'Top 20 cryptocurrencies'} />
    <CoinGlobalInfo broadInfo={broadInfo}/>
      <main>
        <DynamicTableCaller listOfCoins={listOfCoins}/>
      </main>
    </div>
  )
}

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
