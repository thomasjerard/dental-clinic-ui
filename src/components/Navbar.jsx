import React, { useState, useEffect } from 'react';
import MainButton from './ContactUsButton';
import { MdHomeFilled, MdMedicalServices, MdInfo } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router"

function Navbar(){

    const [isMenuBarOpen, setMenuBar] = useState(false);
    const [activeClass, setActiveClass] = useState('navbar-buttons')

    const handleClick = () => {
        setMenuBar(!isMenuBarOpen);
    }

    useEffect(() => {
        if(isMenuBarOpen){
            setActiveClass('navbar-menu-active navbar-buttons');
        }else{
            setActiveClass('navbar-buttons');
        }
    })



    return <div id="navbar">
        <NavLink to="/"><img src='./logo.gif' alt="Logo" /></NavLink>
        <button onClick={handleClick} id='hamburger-menu'><RxHamburgerMenu/></button>
        <div className={activeClass} >
            <NavLink to="/"><MdHomeFilled className='icon'/><p>Home</p></NavLink>
            <NavLink to="/#services-section"><MdMedicalServices className='icon'/><p>Services</p></NavLink>
            <NavLink to="/our_team#about-us-page"><MdInfo className='icon'/><p>About Us</p></NavLink>
            <MainButton link="/#contact-us" theme="blue" title="Contact Us"/>
        </div>
    </div>;
}

export default Navbar;