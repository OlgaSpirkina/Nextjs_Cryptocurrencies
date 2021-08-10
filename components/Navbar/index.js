import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
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
          <a href="https://www.shayp.com/fr/" target="_blank">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
