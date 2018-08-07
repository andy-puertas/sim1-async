import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import './Binlist.css';

export default class BinList extends Component {
  constructor() {
    super();
    this.state = {
      binnies: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`/api/shelf/` + id).then( res => {
      console.log(res.data);                           
      this.setState({ 
        binnies: res.data
      });               
    });
  }
      

  
  render() {
    console.log(this.state);
      const binsListings = this.state.binnies.map((bin ,i) => (         
      <div key={i} className='shelfListContainer'>
          {
            !bin.name ?
            <Link to={`/add/${this.props.match.params.id + (i + 1)}`} className='addInvButton'>
              <h1>+ Add Inventory</h1>
            </Link>
            :
            <Link to={`/inventory/${this.props.match.params.id + bin.bin}`} className='bin-list'>
              <h1>Bin {bin.bin}</h1>
            </Link>
          }
      </div>
  ))

                        
                      


  return (
    <div>
      <nav className='nav-container'>
        <div className='binListNav'>
        <Link to={`/`}>
          <img src={ logo } alt='shelfie-logo' />
        </Link>
        </div>
        <div className='binListShelf'>
          <h1>Shelf {this.props.match.params.id}</h1>
        </div>
      </nav>
        {binsListings}
    </div>
    )
  }
}

