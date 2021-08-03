import React from 'react'
import styles from './Navbar.module.css'

function Navbar({ broadInfo }) {
  return (
    <nav className={styles.main_style}>
      <div className={styles.logo_container}>
        <a href="https://www.shayp.com/fr/">
          <img className={styles.logoimg} src="http://i1.wp.com/www.shayp.com/wp-content/uploads/2021/07/cropped-cropped-websitelogooooo-1-1.png?fit=100%2C51&ssl=1" alt="shayp logo" />
        </a>
        <span><strong>Shayp </strong><br/>The future of cryptocurrency</span>
      </div>
      <ul id={styles.navigation}>
        <li>
          <a href="/">Coins</a>
        </li>
        <li>
          <a href="/converter">Converter</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <div>
        <ul id={styles.broad_info}>Some info
          <li>BTC Dominance: <span>{broadInfo.bitcoin_dominance_percentage} %</span></li>
          <li>Vol 24h: <span>{broadInfo.volume_24h_usd}</span></li>
          <li>Market Cap: <span>{broadInfo.market_cap_ath_value}</span></li>
          <li>Total quantity: <span>{broadInfo.cryptocurrencies_number}</span></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
