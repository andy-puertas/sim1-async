import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';

let shelves = ['A', 'B', 'C', 'D'];

let shelfList = shelves.map((e, i) => {
  return (
    <Link to={`/binlist/${e}`} key={i}>
      <button key={i} className="shelf-button"> Shelf {e}</button>
    </Link>  
  )
}) 

export default function Home () {
  return (
    <div>
        <div className='shelves-container'>
           {shelfList}
        </div>
    </div>
  )

  
}
