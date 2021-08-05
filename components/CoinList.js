import React, { useState, useEffect } from 'react';
import Coins from './Coins'
const CoinList = ({listOfCoins}) => {
  return (
    <>
      {listOfCoins.map(item => {
        if(item.rank <= 20){
          return(
            <Coins
              key={item.rank}
              name={item.name}
              price={item.quotes.USD.price}
              symbol={item.symbol}
              volume={item.quotes.USD.volume_24h}
              priceChange1h={item.quotes.USD.percent_change_1h}
              priceChange24h={item.quotes.USD.percent_change_24h}
            />
          )
        }
      }
    )
  }
    </>
  )

};

export default CoinList;
