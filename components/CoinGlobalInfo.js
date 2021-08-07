import React from 'react'
import styles from './Navbar/Navbar.module.css'

export default function CoinGlobalInfo({ broadInfo }){
  return (
    <div>
     <ul id={styles.broad_info}>Some info
       <li>BTC Dominance: <span>{broadInfo.bitcoin_dominance_percentage} %</span></li>
       <li>Vol 24h: <span>{broadInfo.volume_24h_usd}</span></li>
       <li>Market Cap: <span>{broadInfo.market_cap_ath_value}</span></li>
       <li>Total quantity: <span>{broadInfo.cryptocurrencies_number}</span></li>
     </ul>
    </div>
  )
}
