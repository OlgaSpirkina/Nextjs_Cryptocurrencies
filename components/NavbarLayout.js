import React from 'react'
import Navbar from './Navbar'
import styles from './Navbar/Navbar.module.css'

function NavbarLayout({ broadInfo }) {
  console.log(broadInfo)
  return (
    <nav className={styles.main_style}>
      <div className={styles.logo_container}>
        <a href="https://www.shayp.com/fr/">
          <img className={styles.logoimg} src="http://i1.wp.com/www.shayp.com/wp-content/uploads/2021/07/cropped-cropped-websitelogooooo-1-1.png?fit=100%2C51&ssl=1" alt="shayp logo" />
        </a>
        <span><strong>Shayp </strong><br/>The future of cryptocurrency</span>
      </div>
      <ul id={styles.navigation}>
        <li>
          <a href="/">Coins</a>
        </li>
        <li>
          <a href="/converter">Converter</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
      <Navbar
        percentage={broadInfo.bitcoin_dominance_percentage}
        volume_24h_usd={broadInfo.volume_24h_usd}
        market_cap={broadInfo.market_cap_ath_value}
        cryptocurrencies_number={broadInfo.cryptocurrencies_number}
      />
    </nav>
  )
}

export default NavbarLayout;

const getFetch = async (invoicesUrl, params) => {
   return fetch(invoicesUrl, params);
};

export const getServerSideProps = async () => {
  const invoicesUrl = "https://api.coinpaprika.com/v1/global";
  const params = {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await getFetch(invoicesUrl, params);
    const broadInfo = await res.json();
    console.log("Data JSON: ", broadInfo);
    return { props: { broadInfo } };
  } catch (error) {
    console.log("Data ERROR: ", error);
  }
};
