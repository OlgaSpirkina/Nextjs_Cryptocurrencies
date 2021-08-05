import OptionList from './OptionList'
import Head from 'next/head'

export default function Form({coinConverter, param, changeIt}){
  return (
    <>
      <Head>
      <script
  			  src="https://code.jquery.com/jquery-3.6.0.min.js"
  			  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  			  crossOrigin="anonymous"></script>
      </Head>
      <form>
        <h1>{param}</h1>
        <select id={param} onChange={changeIt}>
          <OptionList coinConverter={coinConverter} />
        </select>
      </form>
    </>
  )
}
