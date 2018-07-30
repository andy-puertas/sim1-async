import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import axios from 'axios';

export default class AddInventory extends Component {
  constructor() {
    super()
    this.state = {
      shelf: "",
      bin: 0,
      name: "",
      price: 0,
      img: ""
    }
    this.handleName = this.handleName.bind( this );
    this.handlePrice = this.handlePrice.bind( this );
    this.handleImage = this.handleImage.bind( this );
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handlePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  handleImage(e) {
    this.setState({
      img: e.target.value
    })
  }

  
  render() {
    console.log(this.state);
      return (
        <div>
          <p>+Add Inventory</p>
    
        </div>
    )
  }
}
