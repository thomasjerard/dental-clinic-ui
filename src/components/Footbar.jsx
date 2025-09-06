import React from 'react';
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlinePermPhoneMsg, MdOutlineMail } from "react-icons/md";

function Footbar({handleClickAnyWhere}){
  return <section id='contact-us' onClick={handleClickAnyWhere}>
              <div id='footer'>
                  <h1>Contact Us</h1>
                  <h3>Feel free to contact us anytime—WhatsApp is our preferred way to connect!</h3>
                  <div className='contacts-container'>
                      <div className='contacts-grid'>
                          <div className='flex-contact'>
                              <FiPhone/>
                              <p>04772 970297</p>
                          </div>
                          <div className='flex-contact'>
                              <MdOutlineMail/>
                              <p>drtijoalex@yahoo.co.in</p>
                          </div>
                          <div className='flex-contact'>
                              <MdOutlinePermPhoneMsg/>
                              <p>9847048002</p>
                          </div>
                          <div className='flex-contact'>
                              <MdOutlineMail/>
                              <p>info@drtijoalexorthodonticcentre.com</p>
                          </div>
                      </div>
                      <div className='flex-contact' id='contact-address'>
                          <MdOutlineLocationOn/>
                          <p>Thevarcad Building <br/> North of Vazhicherry <br/> Bridge, Alapuzha - 688001</p>
                      </div>
                  </div>
              </div>
          </section>   
}

export default Footbar;