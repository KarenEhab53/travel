import React, { useEffect } from 'react'
import './footer.css'
import video from '../../Assets/video (2).mp4';
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  useEffect(() =>{
    Aos.init({duration: 2000})
      },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel with Us</h2>
          </div>
          <div className="inputDiv flex" >
            <input data-aos="fade-up" type="email" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>Send <FiSend className='icon' /></button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'><MdOutlineTravelExplore className='icon' />Travel.</a>
            </div>
            <div data-aos="fade-up" className="footerPAragragh">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptas reprehenderit facere delectus, magni ipsa minima ab. Nesciunt, officia deserunt!</div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">Our Agency</span>
              <li className="footerList flex"><FiChevronRight className='icon' /> services</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Insurance</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Agency</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Tourism</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Payment</li>
            </div>
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">Partners</span>
              <li className="footerList flex"><FiChevronRight className='icon' /> Booking</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Rentcars</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> HostelWorld</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Trivago</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> TripAdvisor</li>
            </div>
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex"><FiChevronRight className='icon' /> London</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> California</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Indonesia</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Europe</li>
              <li className="footerList flex"><FiChevronRight className='icon' /> Oceania</li>
            </div>
          </div>
          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPRYRIGHTS RESERVED - KARKORA</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer