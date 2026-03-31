interface IBgColourChanger {
  colour : string
  onclick : (colour : string) => void
}

const BgColorChanger = ({colour , onclick} : IBgColourChanger) => {
  return (
        <button className="bg-blue-50 m-2 p-1.5 rounded-3xl text-white" 
        style={{backgroundColor:colour}}
        onClick={()=> onclick(colour)}>{colour}</button>
    
  )
}

export default BgColorChanger