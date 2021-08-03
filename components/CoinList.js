import Coins from './Coins'

export default function CoinList({filteredCoins}) {
  return(
    <>
    {filteredCoins.map(coin =>{
      if(coin.rank <= 20){
        return (
          <Coins
            key={coin.rank}
            name={coin.name}
            price={coin.quotes.USD.price}
            symbol={coin.symbol}
            volume={coin.quotes.USD.volume_24h}
            priceChange1h={coin.quotes.USD.percent_change_1h}
            priceChange24h={coin.quotes.USD.percent_change_24h}
          />
        )
      }
    })}
    </>
  )
}
