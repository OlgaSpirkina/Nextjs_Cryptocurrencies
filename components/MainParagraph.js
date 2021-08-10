export default function MainParagraph({ prop }){
  return(
    <p
    style={{
      fontSize: '1.2rem',
      width: '20rem',
      margin: '2rem auto',
      paddingTop: '2rem',
      textAlign: 'center'
    }}>{prop}</p>
  )
}
