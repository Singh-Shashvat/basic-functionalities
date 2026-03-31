import { useState } from "react"
import BgColorChanger from "./bgColorChangerCard"
import { useNavigate } from "react-router-dom"


const bgColours :string[] = ["red", "blue", "green", "yellow", "purple", "black","gold"]
const BBgColorChanger = () => {
    const navigate = useNavigate()
    const[color,setColour] = useState("olive")
  return (
     <>
     <div className="h-screen w-full flex justify-center items-baseline-last  "
            style={{backgroundColor : color}}>
               <div className=" h-14 flex bottom-0 bg-mauve-600">
                {bgColours.map((Color)=>
                    <BgColorChanger colour={Color}
                    key={Color}
                    onclick={setColour}/>
                    )}
                </div> 
                <div className="bg-white">
        <button onClick={() =>navigate("/")}>to next project</button>
        </div>

     </div>

      
    </>
  )
}

export default BBgColorChanger