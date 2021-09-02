import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router"
import styles from './Navbar.module.css'

function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.main_style}>
      <div className={styles.logo_container}>
        <Link href="https://www.shayp.com/fr/">
          <a><img className={styles.logoimg} src="http://i1.wp.com/www.shayp.com/wp-content/uploads/2021/07/cropped-cropped-websitelogooooo-1-1.png?fit=100%2C51&ssl=1" alt="shayp logo" /></a>
        </Link>
        <span><strong>Shayp </strong><br/>The future of cryptocurrency</span>
      </div>
      <ul id={styles.navigation}>
        <li className={router.pathname == "/" ? `${styles.active}` : ""}>
          <Link href="/"><a>Coins</a></Link>
        </li>
        <li className={router.pathname == "/converter" ? `${styles.active}` : ""}>
          <Link href="/converter"><a>Converter</a></Link>
        </li>
        <li>
          <Link href="/" target="_blank" rel="noreferrer"><a>About</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
