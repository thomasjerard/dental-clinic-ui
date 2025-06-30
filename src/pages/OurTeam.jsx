import React, { useRef, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';
import doctorDetails from '../data/doctor-details.json';

function OurTeam(){
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

    return <section id="about-us-page">
        <h1>Our Team</h1>
        <NavLink to="/"><IoArrowBack/></NavLink>
        <div id="doctors-details-container">
            {doctorDetails.map((doctorDetail, index) => (
                true ? 
                (
                    <div key={index} className="doctor-details-container">
                        <img src="./doctor1.jpg" alt=""/>
                        <div className="doctor-details">
                            <h2>{doctorDetail.name}</h2>
                            <p>{doctorDetail.details}</p>
                            <div className="sub-titles">
                                <p>Specialization: {doctorDetail.specilization}</p>
                                <p>Experience: {doctorDetail.experience} yrs</p>
                                <p>Availability: 
                                    <span className={doctorDetail.availability.M}>M</span>
                                    <span className={doctorDetail.availability.T}>T</span>
                                    <span className={doctorDetail.availability.W}>W</span>
                                    <span className={doctorDetail.availability.Th}>T</span>
                                    <span className={doctorDetail.availability.F}>F</span>
                                    <span className={doctorDetail.availability.Sa}>S</span>
                                    <span className={doctorDetail.availability.S}>S</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ):(
                    <div key={doctorDetail.name} className="doctor-details-container">
                        <div className="doctor-details">
                            <h2>{doctorDetail.name}</h2>
                            <p>{doctorDetail.details}</p>
                            <div className="sub-titles">
                                <p>Specialization: {doctorDetail.specilization}</p>
                                <p>Experience: {doctorDetail.experience} yrs</p>
                                <p>Availability: 
                                    <span className={doctorDetail.availability.M}>M</span>
                                    <span className={doctorDetail.availability.T}>T</span>
                                    <span className={doctorDetail.availability.W}>W</span>
                                    <span className={doctorDetail.availability.Th}>T</span>
                                    <span className={doctorDetail.availability.F}>F</span>
                                    <span className={doctorDetail.availability.Sa}>S</span>
                                    <span className={doctorDetail.availability.S}>S</span>
                                </p>
                            </div>
                        </div>
                        <img src="./doctor1.jpg" alt=""/>
                    </div>
                )
            ))}  
        </div>
    </section>
}

export default OurTeam;