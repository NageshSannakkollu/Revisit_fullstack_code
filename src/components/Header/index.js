import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import Cookies from 'js-cookie'
import "./index.css"
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const [showLogout,setShowLogout] = useState(false)
    const checkJwtToken = Cookies.get("jwtToken")
    //console.log("checkJwtToken:",checkJwtToken)
    const navigate = useNavigate()
    const clickOnLogout = () => {
        Cookies.remove('jwtToken')
        navigate("/")
    }
  return (
    <nav className='nav_header_main_container'>
        <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1744520795/original-019188f784fc222947f3922c50882a7f_h3z3pq_kcqrnd.png' alt='logo' className='logo_pic'/> 
        <div className='search_input_container'>
            <IoIosSearch/>
            <input type='search' placeholder='Search...' className='input_search_form'/>
        </div>
        {checkJwtToken !== undefined ? 
        
        <div className='message_notification_profile_container'>
            <MdOutlineMessage/>
            <GoBell/>
            <div className='notifications_show_logout_button_container'>
            <div className='profile_name_container'>
                <p className='initial_name'>S</p>
                <p>Sanjay Razz</p>
                <IoIosArrowDown onClick={() => setShowLogout(!showLogout)}/> 
            </div>
                {showLogout && <button type='button' className='logout_header_button' onClick={clickOnLogout}>Logout</button>}
            </div>
        </div>
        :
        <div>
           <Link to="/login">
                <button type='button' className='login_button'>Login</button>
            </Link>
            <button type='button' className='login_button sing_up_button' onClick={clickOnLogout}>SignUp</button>
        </div>
        }
    </nav>
  )
}

export default Header