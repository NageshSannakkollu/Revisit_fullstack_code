import React from 'react'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import LandingPage from '../Dashboard'

import "./index.css"

const HomePage = () => {
  return (
    <div>
        <Header/>
        <div className='side_navbar_landing_page_container'>
            <SideNavbar/>
            <LandingPage/>
        </div>
    </div>
  )
}

export default HomePage