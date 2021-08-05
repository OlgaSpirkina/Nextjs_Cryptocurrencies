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
        <h4>{param}</h4>
        <select id={param} onChange={changeIt}>
          <option>coin</option>
          <OptionList coinConverter={coinConverter} />
        </select>
      </form>
    </>
  )
}
