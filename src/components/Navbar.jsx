import React, { useState, useEffect } from 'react';
import MainButton from './ContactUsButton';
import { MdHomeFilled, MdMedicalServices, MdInfo } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import dentalClinic from "../assets/dental-clinic.png";
import { NavLink } from "react-router"

function Navbar({setMenuBar, isMenuBarOpen}){

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
        <NavLink to="/"><img src={dentalClinic} alt="Logo" /></NavLink>
        <button onClick={handleClick} id='hamburger-menu'><RxHamburgerMenu/></button>
        <div className={activeClass} >
            <NavLink to="/" onClick={handleClick}><MdHomeFilled className='icon'/><p>Home</p></NavLink>
            <NavLink to="/#services-section" onClick={handleClick}><MdMedicalServices className='icon'/><p>Services</p></NavLink>
            <NavLink to="/our_team#about-us-page" onClick={handleClick}><MdInfo className='icon'/><p>About Us</p></NavLink>
            <MainButton onClick={handleClick} link="/#contact-us" theme="blue" title="Contact Us"/>
        </div>
    </div>;
}

export default Navbar;