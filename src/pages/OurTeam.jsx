import React, { useRef, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';
import doctorDetails from '../data/doctor-details';
import doctorImg from '../assets/doctor-animation.png'

function OurTeam({handleClickAnyWhere}){
  const location = useLocation();
  const NAVBAR_HEIGHT = 77; 

    useEffect(() => {
    if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
            const yOffset = -NAVBAR_HEIGHT;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }, [location]);

    return <section id="about-us-page" onClick={handleClickAnyWhere}>
        <h1>Our Team</h1>
        <NavLink to="/"><IoArrowBack/></NavLink>
        <div id="doctors-details-container">
            {doctorDetails.map((doctorDetail, index) => (  
                <div key={index} className="doctor-details-container">
                    <img src={doctorImg} alt=""/>
                    <div className="doctor-details">
                        <h2>{doctorDetail.name}</h2>
                        <p>{doctorDetail.details}</p>
                        <div className="sub-titles">
                            <p>Specialization: {doctorDetail.specilization}</p>
                        </div>
                    </div>
                </div>
            ))}  
        </div>
    </section>
}

export default OurTeam;