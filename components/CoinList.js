import React, { useState, useEffect } from 'react';
import Coins from './Coins'

const CoinList = () => {
  const[items, setItems] = useState([]);
  const [visible, setVisible] = useState(5);
  const showMoreItems = () => {
    if(visible <= 15){
      setVisible(prevValue => prevValue + 5)
    }
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      {items.slice(0, visible).map((item) => (
        <Coins
          key={item.rank}
          name={item.name}
          price={item.quotes.USD.price}
          symbol={item.symbol}
          volume={item.quotes.USD.volume_24h}
          priceChange1h={item.quotes.USD.percent_change_1h}
          priceChange24h={item.quotes.USD.percent_change_24h}
        />
        ))}
      <button onClick={showMoreItems}>See more</button>  
    </>
  )
};

export default CoinList;
