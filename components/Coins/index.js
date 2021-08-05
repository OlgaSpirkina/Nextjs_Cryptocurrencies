import React from 'react'
import styles from './Coins.module.css'
import Link from 'next/link'

const Coins = ({name, symbol, price, priceChange1h, priceChange24h, volume}) =>{
    return(
      <tr id={styles.row}>
        <td><h3>{name}</h3></td>
        <td>{symbol}</td>
        <td>€{price.toLocaleString()}</td>
        <td>€{volume.toLocaleString()}</td>
        {priceChange1h < 0 ? (
          <td className={styles.red}>
          {priceChange1h.toFixed(2)}%</td>
        ) : (
          <td className={styles.green}>
          {priceChange1h.toFixed(2)}%</td>
        )}
        {priceChange24h < 0 ? (
          <td className={styles.red}>
          {priceChange24h.toFixed(2)}%</td>
        ) : (
          <td className={styles.green}>
          {priceChange24h.toFixed(2)}%</td>
        )}
      </tr>
    )
  }



export default Coins
/*
tr className={styles.row}
h3 className={styles.medium, styles.coin_elem}
td className={styles.small, styles.coin_elem}
*/
