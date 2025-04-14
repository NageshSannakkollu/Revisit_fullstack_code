import React, { useState } from 'react'

import "./index.css"
import { otherInfo, settings, sideNavbarComponents } from '../Constants'
import { Link, useLocation } from 'react-router-dom'
const SideNavbar = () => {
    const [activeTab,setActiveTab] = useState(sideNavbarComponents[0].name)
    const clickOnTab = activeOne => {
        setActiveTab(activeOne)
    } 
    const location = useLocation()
    const currentPath = location.pathname;
    console.log("currTab",currentPath)
  return (
    <div className='side_nav_bar_container'>
    <ul className='side_navbar_list_container'>
        {sideNavbarComponents.map(eachOne => (
            <Link to={`${eachOne.path}`} key={eachOne.name} className='link_list_item' onClick={() => clickOnTab(eachOne.name)}>
            <li key={eachOne.name} className={`thumbnail_component_container ${activeTab === eachOne.name ? "active":''}`}>
                <p className='thumbnail_image'>{eachOne.thumbnailUrl}</p>
                <p>{eachOne.component}</p>
            </li>
            </Link>
        ))}
    </ul>
    <p>Other Information</p>
    <ul className='side_navbar_list_container'>
        {otherInfo.map(eachOne => (
            <Link to={`${eachOne.path}`} key={eachOne.name} className='link_list_item' onClick={() => clickOnTab(eachOne.name)}>
            <li key={eachOne.name} className={`thumbnail_component_container ${activeTab === eachOne.name ? "active":''}`}>
                <p className='thumbnail_image'>{eachOne.thumbnailUrl}</p>
                <p>{eachOne.component}</p>
            </li>
            </Link>
        ))}
    </ul>
    <p>Settings</p>
    <ul className='side_navbar_list_container'>
        {settings.map(eachOne => (
            <Link to={`${eachOne.path}`} key={eachOne.name} className='link_list_item' onClick={() => clickOnTab(eachOne.name)}>
            <li key={eachOne.name} className={`thumbnail_component_container ${activeTab === eachOne.name ? "active":''}`}>
                <p className='thumbnail_image'>{eachOne.thumbnailUrl}</p>
                <p>{eachOne.component}</p>
            </li>
            </Link>
        ))}
    </ul>
    </div>
  )
}

export default SideNavbar