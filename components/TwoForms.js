import { useState, useEffect } from 'react'
import React from 'react'
import Form from './Form'

export default function TwoForms({coinConverter, param}){
  const[inputValue, setInputValue] = useState(0);
    const onChange = (event) => {
      const theNumber = event.target.value;
      setInputValue(theNumber);
  }
  const [value, setValue] = useState('bitcoin');
    const changeIt = (event) => {
      const newValue = event.target.value;
      setValue(newValue);
  };
  let idOfCoin;
  (function (){
    for(let i=0; i<=20; i++){
      if(coinConverter[i].name == value){
        idOfCoin = coinConverter[i].id;
      }
    }
    return idOfCoin;
  })()
  console.log('Voilà id: ' + idOfCoin);

  const CallApi = () => {
    const [currencyOptions, setCurrencyOptions] = useState()
     useEffect(() => {
       fetch(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${idOfCoin}&quote_currency_id=eos-eos&amount=${inputValue}`)
       .then(res => res.json())
       .then(data => {
        setCurrencyOptions(data.price)})
        console.log(currencyOptions);
     }, [])
     return(<p>Ici on affiche le montant: {currencyOptions}</p>)
  }

  return(
    <>
      <div>
        <input type="number" onChange={onChange}/>
        <p>{inputValue}</p>
      </div>
      <Form coinConverter={coinConverter} param="First" changeIt={changeIt} value={value}/>
      <Form coinConverter={coinConverter} param="Second" changeIt={changeIt} value={value}/>
      <CallApi />
    </>
  )
}
