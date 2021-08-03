import React from 'react'

const Broad = ({broadInfo}) =>{
  return(
        <div>
          <div>
            <div>
              <h1>some info</h1>
              <p>BTC Dominance: {broadInfo.bitcoin_dominance_percentage}</p>
              <p>Vol 24h: {broadInfo.volume_24h_usd}</p>
              <p>Market Cap: {broadInfo.market_cap_ath_value}</p>
              <p>Total quantity: {broadInfo.cryptocurrencies_number}</p>
            </div>
          </div>
        </div>
  )
}

export default Broad
