import React from 'react'
import CoinList from '../CoinList'
import styles from './Table.module.css'

const Table = ({filteredCoins}) => {
  return(
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
        <CoinList filteredCoins={filteredCoins}/>
      </tbody>
    </table>
  )
}

export default Table
