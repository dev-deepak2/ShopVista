import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import userAvatar from './userAvatar.png';
import './assets/style.css';

export function ProfileDropdown({ username }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId = null;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Prevent premature hiding
    setIsHovered(true);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 500); // Hide after 3 seconds
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:9090/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        console.log('User successfully logged out');
        navigate('/');
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleOrders = () => {
    navigate('/OrderPage');
  };

  return (
    <div 
      className="profile-dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img 
        src={userAvatar} 
        alt="User Avatar" 
        className="user-avatar"
      />
      <p className="user-name">{username || 'Guest'}</p>

      {isVisible && (
        <div className="dropdown-menu">
          <a onClick={handleOrders}>Orders</a>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}
