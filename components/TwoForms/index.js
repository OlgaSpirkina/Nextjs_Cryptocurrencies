import { useState, useEffect } from 'react'
import React from 'react'
import Form from '../Form'
import styles from './TwoForms.module.css'

// La fonction pour effectuer et afficher la conversion
export default function TwoForms({coinConverter, param}){
  // useState(0) le choix du nombre des monnaies à convertir commence à 0
  const[inputValue, setInputValue] = useState(0);
    const onChange = (event) => {
      const theNumber = event.target.value; // récupérer la valeur de l'input (le nombre choisi)
      setInputValue(theNumber); // cette valuer est prise en compte et mis à jour
  }
  // Mettre à jour la valeur de la monnaie choisie du premier Select
  // la variable valueFirst est mis à jour grâce à la methode  setValueFirst
  const [valueFirst, setValueFirst] = useState();  // useState est vide - pas de valeur par default
    const changeItFirst = (event) => {
      const newValue = event.target.value;
      setValueFirst(newValue);
  };
  // La même chose pour le deuxième Select
  const [valueSecond, setValueSecond] = useState();
    const changeItSecond = (event) => {
      const newValueSecond = event.target.value;
      setValueSecond(newValueSecond);
  };
  // Récupérer l'id des valeurs de monnaies choisis pour les utiliser plus tard quand j'appelle un API de conversion
  let idOfCoin1, idOfCoin2;
  // La fonction anonime qui assigne le id de chaque monnaie à une variable idOfCoin1 ou idOfCoin2
  (function (){
    for(let i=0; i<coinConverter.length; i++){
      if(coinConverter[i].name == valueFirst){
        idOfCoin1 = coinConverter[i].id;
      }
    }
  return idOfCoin1;
 })();
 // let idOfCoin2;
 (function (){
   for(let i=0; i<coinConverter.length; i++){
     if(coinConverter[i].name == valueSecond){
       idOfCoin2 = coinConverter[i].id;
     }
   }
 return idOfCoin2;
})();
// J'appelle un API de conversion et passe les variable qui contiennent id des monnaies choisies et le nombre des monnaies
const CallApi = () => {
    const [currencyOptions, setCurrencyOptions] = useState()
     useEffect(() => {
       fetch(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${idOfCoin1}&quote_currency_id=${idOfCoin2}&amount=${inputValue}`)
       .then(res => res.json())
       .then(data => {
        setCurrencyOptions(data.price)}); // data.price c'est la valeur de conversion
     }, []);
     return(
       // currencyOptions est mise à jour grâce à la methode setCurrencyOptions
       <p>Ici on affiche le montant: {currencyOptions}</p>
     )
   }
  return(
    <div id={styles.forms_container}>
      <div id={styles.input_parent}>
        <h3>quantity: </h3>
        <input type="number" onChange={onChange} min="0" className={styles.input} />
      </div>
      <div id={styles.forms_parent}>
        <Form coinConverter={coinConverter} param="From" changeIt={changeItFirst} value={valueFirst} className={styles.forms} />
        <Form coinConverter={coinConverter} param="To" changeIt={changeItSecond} value={valueSecond} className={styles.forms} />
      </div>
      <CallApi />
    </div>
  )
}
