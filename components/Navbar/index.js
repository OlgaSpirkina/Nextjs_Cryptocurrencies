import React from 'react'
import styles from './Navbar.module.css'

function Navbar({ percentage, volume_24h_usd, market_cap, cryptocurrencies_number }) {
  return (
      <div>
        <ul id={styles.broad_info}>Some info
          <li>BTC Dominance: <span>{percentage} %</span></li>
          <li>Vol 24h: <span>{volume_24h_usd}</span></li>
          <li>Market Cap: <span>{}</span></li>
          <li>Total quantity: <span>{cryptocurrencies_number}</span></li>
        </ul>
      </div>
  )
}

export default Navbar
