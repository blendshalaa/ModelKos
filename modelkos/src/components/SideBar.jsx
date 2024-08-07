/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path if needed
import '../styles/SideBar.scss';

function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='close-btn' onClick={onClose}>
        &times;
      </button>
      <div className='logo'>
        <img className='logoimg' src={logo} alt='logo' />
        <p className='logotitle'>MODELKOS</p>
      </div>
      <div className='nav-menu'>
        <ul>
          <li className='nav-item'><a href='#home'>Home</a></li>
          <li className='nav-item'><a href='#our-work'>Our Work</a></li>
          <li className='nav-item'>
            <a href='#about'>About</a>
            <svg className='dropdown-arrow' xmlns="http://www.w3.org/2000/svg" width="8.987" height="5.432" viewBox="0 0 8.987 5.432">
              <path d="M18.871,11.828l-3.743,4.345a.916.916,0,0,1-1.273,0l-3.743-4.345a.419.419,0,0,1-.02-.552A.828.828,0,0,1,10.748,11h7.487a.828.828,0,0,1,.656.279A.419.419,0,0,1,18.871,11.828Z" transform="translate(-9.998 -10.997)" fill="#1d1d1d"/>
            </svg>
          </li>
          <li className='nav-item'>
            <a href='#models'>Models</a>
            <svg className='dropdown-arrow' xmlns="http://www.w3.org/2000/svg" width="8.987" height="5.432" viewBox="0 0 8.987 5.432">
              <path d="M18.871,11.828l-3.743,4.345a.916.916,0,0,1-1.273,0l-3.743-4.345a.419.419,0,0,1-.02-.552A.828.828,0,0,1,10.748,11h7.487a.828.828,0,0,1,.656.279A.419.419,0,0,1,18.871,11.828Z" transform="translate(-9.998 -10.997)" fill="#1d1d1d"/>
            </svg>
          </li>
          <li className='nav-item'>
            <a href='#academy'>Academy</a>
            <svg className='dropdown-arrow' xmlns="http://www.w3.org/2000/svg" width="8.987" height="5.432" viewBox="0 0 8.987 5.432">
              <path d="M18.871,11.828l-3.743,4.345a.916.916,0,0,1-1.273,0l-3.743-4.345a.419.419,0,0,1-.02-.552A.828.828,0,0,1,10.748,11h7.487a.828.828,0,0,1,.656.279A.419.419,0,0,1,18.871,11.828Z" transform="translate(-9.998 -10.997)" fill="#1d1d1d"/>
            </svg>
          </li>
          <li className='nav-item'>
            <a href='#blog'>Blog</a>
          </li>
        </ul>
      </div>
      <div className='nav-buttons'>
        <button className='apply-button'>Apply Now</button>
        <button className='contact-button'>Contacts</button>
      </div>
    </div>
  );
}
export default Sidebar

