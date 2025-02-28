import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/style.css';


export function CartIcon({ count }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/UserCartPage');
  };

  return (
    <div className="cart-icon" onClick={handleCartClick}>
     <svg
  class="cart-icon-svg"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="9" cy="21" r="1" />
  <circle cx="20" cy="21" r="1" />
  <path d="M1 1h4l2.3 12.6a2 2 0 0 0 2 1.4h9a2 2 0 0 0 2-1.6l1.2-7H6" />
</svg>

    
      
      <span className="cart-badge">{count}</span>
      <p className="user-name">Cart</p>
    </div>
  );
}