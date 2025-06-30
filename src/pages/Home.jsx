import React, { useRef, useEffect } from 'react';
import MainButton from '../components/ContactUsButton';
import servicesData from '../data/services.json';
import { NavLink, useLocation } from "react-router"
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function Home(){
  const scrollContainerRef = useRef(null);

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

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const visibleCardCount = 3;
        const scrollAmount = container.clientWidth / visibleCardCount;
        console.log('Scrolling LEFT by:', scrollAmount, 'px');
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const visibleCardCount = 3;
        const scrollAmount = container.clientWidth / visibleCardCount;
        scrollContainerRef.current.scrollBy({ left: +scrollAmount, behavior: 'smooth' });
    }
  };

    return <div id="home">
        <div id="front-page">
            <div className='front-title'>
                <h1>Gentle <br/><span className="hightlight-text">Caring</span><br/>Professional</h1>
                <div className='front-buttons'>
                    <MainButton link="#contact-us" theme="blue" title="Contact Us"/>
                    <MainButton link="#services-section" theme="light" title="Services"/>
                </div>
            </div>
            <div className="bg-image">
                <img src="./dental-clinic-img-new.jpg" alt=""/>
            </div>
        </div>
        <div id="about-us">
            <h1>Why Choose Us?</h1>
            <h2>Led by expert orthodontist Dr. Tijo Alex, our skilled team of specialists works together to deliver expert care and confident smiles</h2>
            <div className='about-us-buttons'>
                <MainButton link="/our_team" theme="blue" title="Our Team"/>
                <MainButton link="/our_story" theme="light" title="Our Story"/>
            </div>
        </div>
        <services id='services-section'>
            <div id='services'>
                <h1>Our Services</h1>
                <div id='services-container' ref={scrollContainerRef}>
                {servicesData.map(item => (
                        <div key={item.id} className="service-card">
                            <img src={item.img_path} alt=""/>
                            <div className='service-text-wrap'>
                                <h3>{item.name}</h3>
                                <div className='service-description'>
                                    <p>{item.description}</p>
                                </div>
                                <div className='more-info'>
                                    <NavLink to=''>learn more</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <MdArrowBackIos id="scroll-left" onClick={scrollLeft} class="material-symbols-outlined"/>
                <MdArrowForwardIos id="scroll-right" onClick={scrollRight} class="material-symbols-outlined"/>
            </div>
        </services>
    </div>;
}

export default Home;