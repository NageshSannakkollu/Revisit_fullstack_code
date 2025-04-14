import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const RegisterPage = () => {
  const [values,setValues] = useState({
        username:'',
        password:'',
        email:''
      })
      const [passwordType,setPasswordType] = useState(false)
      const navigate = useNavigate()
      const loginHandler = async(e) => {
          e.preventDefault()
          console.log("Register:",values)
          try {
              const response = await axios.post(`https://revisit-backend-assign.onrender.com/api/sign_up`,values)
            if(response.data.success){  
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
          <h3 className='login_title'>Register Form</h3>
          <div className='form_inside_container'>
              <h4>User Name: </h4>
              <input type='text' name="username" placeholder='Enter Username...' className="input-form" onChange={e => setValues({...values,username:e.target.value})} required/>
          </div>
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
              <button type='submit' className="add_button">Register</button>
              <p className='click-here-links'>Already Registered?<Link to="/login"><span> Click here..</span></Link></p>
              
          </form>
      </div>
    )
  
}

export default RegisterPage