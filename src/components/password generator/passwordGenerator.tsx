import { useState,useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const passwordGenerator = () => {

    const navigate = useNavigate();
    const [number ,setNumber] = useState(false)
    const [char ,setChar] = useState(false)
    const [password ,setPassword] = useState("")
    const [length ,setLength] = useState(8)

    const Passwordgenerate = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(number) str += "0123456789"
        if(char) str += "!@#$%^&*(){}[]"

        for (let index = 1; index <= length; index++) {
            let char = Math.floor(Math.random() * str.length + 1)    
                pass += str.charAt(char) 
            }
                setPassword(pass)       
    } , [number,char , setPassword,length])

    useEffect(()=>{Passwordgenerate()},[length , number ,char ,Passwordgenerate])
  return (
    <>
        <div className="bg-black flex h-screen justify-center p-10">
            <div className="h-30 w-120 bg-gray-800 flex items-center flex-col">
                <h1 className="text-white"> Password Generator</h1>

                <div className="w-full flex justify-center">
                    <input type="text"
                    placeholder="password" 
                    className="bg-white rounded-lg p-1.5 "
                    readOnly
                    value={password}/>
                    
                </div>
                <div>
                    <input type="range"
                    min={8}
                    max={100}
                    value={length}
                    onChange={(e)=> {setLength(+e.target.value)}} />
                    <label>Length : {length}</label>

                    <input type="checkbox"
                    defaultChecked = {number}
                    onChange={()=>{setNumber((prev) => !prev)}} />
                    <label >Number</label>
                    <input type="checkbox"
                    defaultChecked = {char}
                    onChange={()=>{setChar((prev) => !prev)}} />
                    <label >Character</label>
                </div>
            </div>
             <div className="bg-blue-800 h-10 flex items-center rounded-xl">
        <button onClick={() =>navigate("/bgcolor")} className="text-white">to next project</button>
        </div>
        </div>

       

    </>
  )
}

export default passwordGenerator