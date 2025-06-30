import React, { useRef, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery'

function OurStory(){
    const sampleImages = [
  "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg"
];

    return <>
        <section id="our-story">
            <NavLink to="/"><IoArrowBack/></NavLink>
            <div id="our-story-container">
                <h1>Our Story</h1>
                <div id="our-story-content">
                    <div className='content'>
                        <p>Dr. Tijo Alex’s Orthodontic centre located in the heart of Alappuzha,
                        The Venice of the East, is a modern dental care centre with extensive facilities for various kinds of dental procedures.
                        The clinic offers world class dental treatment utilizing the latest technologies in dental specialities like Orthodontics, 
                        Endodontics, Oral Maxillofacial surgery, Periodontics, Prosthodontics, Implantology and Cosmetic Dentistry.
                        Painless dental practices with very high standards of excellence and a dedicated team of highly qualified and incredibly friendly dental professionals are it’s specialities. 
                        The team is always at the service of its patients responding to any of their requirements related to dental health and beauty.
                        </p>
                    </div>
                    <ImageGallery images={sampleImages} />
                </div>
            </div>
        </section>
    </>
}

export default OurStory;