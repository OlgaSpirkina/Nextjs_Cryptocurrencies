import {useEffect, useState} from 'react'
import TwoForms from '../components/TwoForms'
import CoinGlobalInfo from '../components/CoinGlobalInfo'
import MainParagraph from '../components/MainParagraph'
import styles from '../styles/Home.module.css'

export default function Converter({ broadInfo, coinConverter }){
  return (
  <div className={styles.converter_container}>
    <MainParagraph prop={'Check the conversion rate here:'} />
    <CoinGlobalInfo broadInfo={broadInfo}/>
    <TwoForms coinConverter={coinConverter}/>
  </div>
  )
}

export async function getStaticProps() {
  const [broadInfoRes, coinConverterRes] = await Promise.all([
    fetch('https://api.coinpaprika.com/v1/global'),
    fetch('https://api.coinpaprika.com/v1/tickers')
  ]);
  const [broadInfo, coinConverter] = await Promise.all([
    broadInfoRes.json(),
    coinConverterRes.json()
  ]);
  return { props: {broadInfo, coinConverter} };
}

// setInterval(() =>   fetch('https://api.coinpaprika.com/v1/global'), 60000),
/*
  export async function getStaticProps() {
  const res = await fetch('https://api.coinpaprika.com/v1/global')
  const broadInfo = await res.json()
  return {
    props: {
      broadInfo
    },
  }
}
*/
