import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Converter({broadInfo}){
  return (
  <div className={styles.main_container}>
    <Navbar broadInfo={broadInfo}/>
    <h1>Welcome to Converter !</h1>
  </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://api.coinpaprika.com/v1/global')
  const broadInfo = await res.json()
  return {
    props: {
      broadInfo
    },
  }
}
