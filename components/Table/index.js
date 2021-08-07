import React from 'react'
import { useMediaQuery } from 'react-responsive'
import CoinList from '../CoinList'
import styles from './Table.module.css'

const Table = ({listOfCoins}) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 850 });
  const mobileVersion = useMediaQuery({ maxWidth: 849 });
  return(
    <>
    {mobileVersion &&
      <div className={styles.mobileVersionOfTable}>
        <CoinList listOfCoins={listOfCoins}/>
      </div>}
    {isDesktopOrLaptop &&
    <table id={styles.table}>
      <thead>
        <tr>
          <th>name</th>
          <th>symbol</th>
          <th>price</th>
          <th>volume24h</th>
          <th>priceChange1h</th>
          <th>priceChange24h</th>
        </tr>
      </thead>
      <tbody>
        <CoinList listOfCoins={listOfCoins}/>
      </tbody>
    </table>
  }
  </>
  )
}

export default Table
