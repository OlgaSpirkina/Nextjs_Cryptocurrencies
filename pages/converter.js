import {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import TwoForms from '../components/TwoForms'
import styles from '../styles/Home.module.css'

export default function Converter({broadInfo, coinConverter}){
  return (
  <div className={styles.converter_container}>
    <Navbar broadInfo={broadInfo}/>
    <h1>Welcome to Converter !</h1>
    <TwoForms coinConverter={coinConverter}/>
  </div>
  )
}
export async function getServerSideProps() {
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
