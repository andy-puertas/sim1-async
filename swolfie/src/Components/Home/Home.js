import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'; 
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className='home-nav'>
          <div className='logo-container'>
            <img src={ logo } alt='shelfie-logo' />
            <h1>SHELFIE</h1>
          </div>
        </nav>

        <div className='shelves-container'>
          <Link to={`/binlist/A`} className='shelf-list'>
            <h1>Shelf A</h1>
          </Link>

          <Link to={`/binlist/B`} className='shelf-list'>
            <h1>Shelf B</h1>
          </Link>

          <Link to={`/binlist/C`} className='shelf-list'>
            <h1>Shelf C</h1>
          </Link>

          <Link to={`/binlist/D`} className='shelf-list'>
            <h1>Shelf D</h1>
          </Link>

        </div>
      </div>
    )
  }
}

        

