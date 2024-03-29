import React, { useState } from 'react'
import './style/Navbar.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false)
  return (
    <div className='nav_container'>
        <div>
            <Link to="/"><img style={{width:'90px',marginLeft:'25%'}} src="masai_logo.jpg" alt="logo" /></Link> 
        </div>
        <div className={showMediaIcons ? "menu-link mobile-menu-link":"menu-link"}>
            <ul>
                <li><a href="#"> <Link onClick = {()=>setShowMediaIcons(!showMediaIcons)} to="lectures">Lectures</Link> </a></li>
                <li><a href="#"> <Link onClick = {()=>setShowMediaIcons(!showMediaIcons)} to="assignments">Assignments </Link> </a></li>
                <li><a href="#"> <Link onClick = {()=>setShowMediaIcons(!showMediaIcons)} to="admin">Admin </Link> </a></li>
                <li><a href="#"> <Link onClick = {()=>setShowMediaIcons(!showMediaIcons)} to="login">Login </Link> </a></li>
            </ul> 
        </div>
        <div className='hamburger-menu'>
                 <a href='#' onClick = {()=>setShowMediaIcons(!showMediaIcons)}>
                     <GiHamburgerMenu />
                     </a>
        </div>
    </div>
  )
}

export default Navbar