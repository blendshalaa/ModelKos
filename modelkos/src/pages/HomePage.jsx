/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import '../styles/HomePage.scss'

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;
