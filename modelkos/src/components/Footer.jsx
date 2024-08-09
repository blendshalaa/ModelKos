/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/Footer.scss'

import Circle from './Circle'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import tiktok from '../assets/tiktok.svg'
import logowhite from '../assets/sub4.svg'
import arrow from '../assets/arrow.svg'
import flag from '../assets/Flags.svg'


function Footer() {
  return (
    <footer className='footer'>

        <div className='text-footer'>
            <h1 className='modeltext-footer'>modeling</h1>
            <Circle text="AGENCY - MODELING - MODELKOS - INSTAGRAM" />
            <h1 className='modeltext-footer'>modeling</h1>
        </div>


       
      <div className='footer-lists'>
        <ul className='footer-list'>
          <li className='footer-list-title'>Models</li>
          <li><a href="#link1">Book Model</a></li>
          <li><a href="#link2">Man Models</a></li>
          <li><a href="#link3">Woman Models</a></li>
          <li><a href="#link4">Kid Models</a></li>
          <li><a href="#link5">Membership</a></li>
        </ul>
        <ul className='footer-list'>
          <li className='footer-list-title'>About</li>
          <li><a href="#link6">Company</a></li>
          <li><a href="#link7">Our Team</a></li>
          <li><a href="#link8">Partners</a></li>
          <li><a href="#link9">Career</a></li>
          <li><a href="#link10">News & Events</a></li>
        </ul>
        <ul className='footer-list'>
          <li className='footer-list-title'>Work</li>
          <li><a href="#link11">Photography</a></li>
          <li><a href="#link12">Design</a></li>
          <li><a href="#link13">Makeup Artist</a></li>
          <li><a href="#link14">Fashion Show</a></li>
          <li><a href="#link15">Advertising</a></li>
        </ul>
        <ul className='footer-list'>
          <li className='footer-list-title'>Support</li>
          <li><a href="#link16">Privacy Statement</a></li>
          <li><a href="#link17">Terms Of Service</a></li>
          <li><a href="#link18">Help</a></li>
          <li><a href="#link19">FAQ</a></li>
          <li><a href="#link20">Contacts</a></li>
        </ul>
        <div className='rightfooter'>
  <div className='top-section'>
    <div className='models'>
      <p>Models</p>
      <p>Women -02037 376 7764</p>
      <p>Men -0207 376 7464</p>
      <p>bookamodel@modelkos.com</p>
    </div>
    <div className='modelmanagement'>
      <p>MODELKOS MANAGEMENT</p>
      <p>1st Floor</p>
      <p>5 Jubile Place</p>
      <p>Prishtina Kosov</p>
    </div>
  </div>
  <div className='jobs'>
    <p>Jobs</p>
    <p>jobs@modelkos.com</p>
  </div>
</div>

      </div>

      <div className='footer-end'>

      <div className='logofooter'>
        <img className='logoimgf' src={logowhite} alt='logo' />
        <p className='logotitlefooter'>MODELKOS</p>
        <p>@2022 - MODELKOS</p>
      </div>
      
      <div className='mid-section-footer'>
        <p>Privacy Statement |</p>
        <p>Terms of Service |</p>
        <p>Help /FAQ </p>
      </div>

      <div className='icons'>
        <img src={facebook} alt='facebook'></img>
        <img src={instagram} alt='facebook'></img>
        <img src={tiktok} alt='facebook'></img>
        <img src={twitter} alt='facebook'></img>

      </div>

      <div className='number'>
        <p>+383 (44) 100 200</p>
       
      </div>
      <div className='language'>
        <img src={flag} alt='flag'></img>
      <p>English</p>
      <img src={arrow} alt='arrow'></img>
      </div>
     



      </div>
     



    </footer>
  )
}

export default Footer