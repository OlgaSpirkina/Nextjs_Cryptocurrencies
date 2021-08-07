import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './Coins.module.css'
import Link from 'next/link'

const Coins = ({name, symbol, price, priceChange1h, priceChange24h, volume}) =>{
  const isMobile = useMediaQuery({ maxWidth: 849 });
  const desktopVersion = useMediaQuery({ minWidth: 850 });
    return(
      <>
      {isMobile &&
        <div className={styles.card_for_coin}>
          <h3>{name} <span>{symbol}</span></h3>
          <p><small>price: </small>€{price.toLocaleString()}</p>
          <p><small>volume24h: </small>€{volume.toLocaleString()}</p>
          {priceChange1h < 0 ? (
            <p className={styles.red}>
            <small className={styles.small}>priceChange1h: </small>
            {priceChange1h.toFixed(2)}%</p>
          ) : (
            <p className={styles.green}>
            <small className={styles.small}>priceChange1h: </small>
            {priceChange1h.toFixed(2)}%</p>
          )}
          {priceChange24h < 0 ? (
            <p className={styles.red}>
            <small className={styles.small}>priceChange24h: </small>
            {priceChange24h.toFixed(2)}%</p>
          ) : (
            <p className={styles.green}>
            <small className={styles.small}>priceChange24h: </small>
            {priceChange24h.toFixed(2)}%</p>
          )}
        </div>}
        {desktopVersion &&
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
        }
      </>
    )
  }



export default Coins
/*
tr className={styles.row}
h3 className={styles.medium, styles.coin_elem}
td className={styles.small, styles.coin_elem}
*/
