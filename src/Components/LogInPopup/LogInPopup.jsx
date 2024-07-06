import React, { useState } from 'react'
import './LogInPopup.css'
import { assets } from '../../assets/assets'

const LogInPopup = ({setShowLogin}) => {

    const [currState, setCurrState]= useState("LogIn")

  return (
    <div className='login-popup'>
    <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="LogIn"?<></>:<input type="text" placeholder='Your Name' required />}
            
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Log In"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By Continuing, I Agree to the terms and conditions Policy.</p>
        </div>
        {currState==="LogIn"?<p>Create a new Account? <span onClick={()=>setCurrState("SignUp")} >Click Here</span></p>:
        <p>Alreay have an account? <span onClick={()=>setCurrState("LogIn")} >LogIn here</span></p>}
    </form>
    </div>
  )
}

export default LogInPopup
