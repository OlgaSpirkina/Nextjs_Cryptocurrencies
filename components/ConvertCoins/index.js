import CoinsForConversion from '../CoinsForConversion'
const ConvertCoins = ({coinConverter}) => {
  return (
    <>
    {coinConverter.map((item, index) => {
      if(index <= 20){
        return(
          <CoinsForConversion
            key={index}
            name={item.name}
          />
        )
      }
    })}
    </>
  )
}

export default ConvertCoins;


// La CONVERSION DES COINS Test
/*
const res = await fetch("https://api.coinpaprika.com/v1/price-converter?base_currency_id=eth-ethereum&quote_currency_id=btc-bitcoin&amount=1");
const coins = await res.json();
console.log(coins);
*/
