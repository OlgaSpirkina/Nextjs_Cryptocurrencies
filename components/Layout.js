import NavbarLayout from './NavbarLayout'
import styles from '../styles/Layout.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import{faEnvelopeOpen} from '@fortawesome/free-regular-svg-icons';

export default function Layout({ children }){
  return (
    <div className={styles.container}>
      <NavbarLayout />
        {children}
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
