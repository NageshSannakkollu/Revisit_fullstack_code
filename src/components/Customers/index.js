import React from 'react'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

const Customers = () => {
  return (
    <div>
        <Header />
        <div className='side_navbar_landing_page_container'>
            <SideNavbar/>
            <div className='landing_section_main_container'>
                <h3>Welcome to Customers</h3>
            </div>
        </div>
    </div>
  )
}

export default Customers