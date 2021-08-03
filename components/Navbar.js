import React from 'react'
import Broad from './Broad'
import fetch from "node-fetch";
import styles from './Navbar.module.css'
export default function Navbar({broadInfo}) {
  return(
    <nav className={styles.main_style}>
      <div className={styles.flex}>
        <a href="/" className="rounded bg-blue-500 ">Coins</a>
      </div>
      <div className={styles.flex}>
        <a href="/converter" className="rounded bg-blue-500 ">Converter</a>
      </div>
      <div>
        <Broad broadInfo={broadInfo}/>
      </div>
    </nav>
  )
}
