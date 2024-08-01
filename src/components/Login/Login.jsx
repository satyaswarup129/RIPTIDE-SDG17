import React, { useState } from 'react'
import './Login.css'
import cross from '../../assets/back-icon.png'

const Login = ({setShowLogin}) => {
    const[currState,setcurrState] = useState("Login")
  return (
    <div className="login">
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={cross} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your E-mail' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing. i agree to the term use and privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account?<span onClick={()=>setcurrState("Sign up")}>Click here</span></p>:
            <p>Already had an account?<span onClick={()=>setcurrState("Login")}>Login here</span></p>}
            
        </form>
    </div>
  )
}

export default Login