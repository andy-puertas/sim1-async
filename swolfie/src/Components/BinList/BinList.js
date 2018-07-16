import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Binlist.css'

export default class BinList extends Component {
  constructor() {
    super();
    this.state = {
      binnies: []
    }
  }

  componentDidMount() {
    axios.get(`/api/bins/${this.props.match.params.shelf}`).then( res => {
      console.log(res.data);                             
      this.setState({ 
        binnies: res.data 
      });               
    });
  }
      

  
  render() {
    console.log(this.state);
      let binsListings = this.state.binnies.map((e,i) => {         
        if(e === null) {
          return(
            <div className="add-inventory-button-container" key={"empty"+i}>
              <button className="add-inventory-button"> + Add Inventory </button>
            </div>
                  
              )
        }
          else {
            return (
              <Link to={`/inventory/${this.props.match.params.shelf}/${i+1}`} key={"full"+i}>      
                  <button className="bin-button"> Bin {i+1} </button>
              </Link>  
          )  
      }
  })
                        
                      


  return (
    <div>
      <div className='bin-button-container'>
        {binsListings}
      </div>
    </div>
    )
  }
}
