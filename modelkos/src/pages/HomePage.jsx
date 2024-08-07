import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
}

export default HomePage;
