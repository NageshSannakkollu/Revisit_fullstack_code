import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"
import axios from 'axios'

import "./index.css"
import { toast } from 'react-toastify'
const LoginPage = () => {
    const [values,setValues] = useState({
        password:'',
        email:''
    })
    const [passwordType,setPasswordType] = useState(false)

    const navigate = useNavigate()
    const loginHandler = async(e) => {
        e.preventDefault()
        //console.log("Login:",values)
        try {
            const response = await axios.post(`https://revisit-backend-assign.onrender.com/api/login`,values)
            if(response.data.success){  
            Cookies.set('jwtToken', response.data.jwtToken, {expires: 30})
            toast.success(response.data.message)
            navigate("/")
        }else{
            toast.error(response.data.message)
        }
        } catch (err) {
            console.log(err.message)
        }
    }

    const changePasswordType = () => {
        setPasswordType(!passwordType)
    }

    const passwordModel = passwordType?"text":"password"

  return (
        <div className='update_page_container'>
        <form onSubmit={loginHandler} className="form_container" >
        <h3 className='login_title'>Login Form</h3>
        <div className='form_inside_container'>
            <h4>Email: </h4>
            <input type='email' name="email" placeholder='Enter Email...' className="input-form" onChange={e => setValues({...values,email:e.target.value})} required/>
        </div>
        <div className='form_inside_container'>
            <h4>Password: </h4>
            <input type={`${passwordModel}`} name="password" placeholder='Enter password...' className="input-form" onChange={e => setValues({...values,password:e.target.value})} required/>
        </div>
        <br/>
        <div className='show-password-container'>
            <input type='checkbox' id="checkbox" className='checkbox-input' onClick={changePasswordType}/>
            <label htmlFor="checkbox" className='label-title'>Show Password </label>
        </div>
            <br/>
            <button type='submit' className="add_button">Login</button>
            <p className='click-here-links'>Not Registered? <Link to="/sign_up"><span>Click here..</span></Link></p>
            
        </form>
    </div>
  )
}

export default LoginPage