import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

export default () => {
  return (
    <div className='header-container'>
      <div className='header-logo'>

        <Link to='/'>
          <img src={logo} alt='self-logo'/>
        </Link>

      </div>

      <div className='website-title'>
        <h4>SHELFIE</h4> 
      </div>
      
    </div>
  )
}
