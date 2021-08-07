import Head from 'next/head'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import{faEnvelopeOpen} from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function Layout({ children, broadInfo }){
  return (
    <div className={styles.container}>
      <Head>
        <title>Shayp Coins</title>
        <meta name="description" content="Criptocurrency display web application" />
        <link rel="icon" href="/logoshayp.png" />
      </Head>
      <Navbar />
        {children }
      <footer id={styles.footer}>
        <div id={styles.copyright}>Olga Spirkina &copy; 2021</div>
        <div id={styles.socialmedia}>
          <FontAwesomeIcon className={styles.mediaIcons} icon={faGithub} size="2x"/>
          <FontAwesomeIcon className={styles.mediaIcons} icon={faLinkedin} size="2x"/>
          <FontAwesomeIcon className={styles.mediaIcons} icon={faEnvelopeOpen} size="2x"/>
        </div>
      </footer>
    </div>
  )
}
