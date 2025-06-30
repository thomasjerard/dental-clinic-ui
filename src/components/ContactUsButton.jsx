import React from 'react'
import { NavLink } from "react-router"
import { IoMdCall } from "react-icons/io";

function MainButton({link, theme, title}){
    return <div id="main-button" className={theme}>
            <NavLink to={link}>{title}</NavLink>
    </div>
}

export default MainButton;