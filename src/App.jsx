import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.jsx';
import Notification from './components/Notification/Notification.jsx';
import LocationLoad from './components/LocationLoad/LocationLoad.jsx';

import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Feedbacks from './pages/Feedbacks/Feedbacks.jsx';

import useAnimatedAppearance from './hooks/useAnimatedAppearance.js';

import './App.css';

function App() {
  // States
  const [notifications, setNotifications] = useState([]);

  const createNotification = (content) => {
    setNotifications((prev) => [...prev, content]);
  };

  useEffect(() => {
    // Initial notification and clipboard copy event listener
    createNotification("💖 Welcome to my website! I hope everything is clear to you.");
    
    const handleCopy = () => {
      createNotification("✔️ Succesfully copied to clipboard!");
    };

    document.addEventListener('copy', handleCopy);

    return () => {
      // Cleanup function
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  // Apply animated appearance logic
  useAnimatedAppearance();

  return (
    <>           
      <Navbar/>
      <LocationLoad/>

      <div className='notifications_container'>
        {
          notifications.map((content, index) => 
            <Notification key={index} content={content}/>
          )
        }
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/feedbacks" element={<Feedbacks/>} />
        <Route path="*" element={() => <h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
