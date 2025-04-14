import React from 'react'
import Header from '../Header'
import SideNavbar from '../SideNavbar'

const Coupons = () => {
  return (
    <div>
        <Header />
        <div className='side_navbar_landing_page_container'>
            <SideNavbar/>
            <div>
                <h3>Welcome to Coupons</h3>
            </div>
        </div>
    </div>
  )
}

export default Coupons