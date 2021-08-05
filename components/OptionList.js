import OptionOfSelect from './OptionOfSelect'
const OptionList = ({coinConverter}) => {
  return (
    <>
    {coinConverter.map((coin, index) => {
      if(index <= 20){
        return(
          <OptionOfSelect
            key={index}
            id={coin.id}
            name={coin.name}
          />
        )
      }
    })
  }
  </>
  )
}
export default OptionList
