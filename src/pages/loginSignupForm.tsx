
import { useState } from "react";



const LoginSignupForm = () => {
    const [isLogin , setIsLogin] = useState(true)

  return (
    <div>
        <div>
            <h1>{isLogin ? "Login" : "Signup"}</h1>
            <form className="flex flex-col">
                {!isLogin &&(<input
                 type="text"
                 placeholder="name"
                 />
                 ) }

                 <input type="text"
                 placeholder="email" />

                 <input type="text"
                 placeholder="password" />

                 <button onClick={()=>console.log("clicked")}>
                    {isLogin ? "login" : "signup"}
                 </button>
            </form>


            <div>
                <p>{isLogin ? "don't have an account? " : "already have an account "}
                    <button onClick={()=>setIsLogin(!isLogin)}> {isLogin ? "signup" : "login"}</button>
                </p>
            </div>


        </div>
    </div>
  )
}

export default LoginSignupForm