import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import './AddInventory.css';


export default class AddInventory extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      price: "",
      image: "",
      itemArr: []
    }
    this.handleName = this.handleName.bind( this );
    this.handlePrice = this.handlePrice.bind( this );
    this.handleImage = this.handleImage.bind( this );
    this.addToInventory = this.addToInventory.bind( this )
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`/api/bin/` + id).then( res => {
      console.log(res.data);
      this.setState({
        itemArr: res.data[0]
      })
    })
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
      image: e.target.value
    })
  }


  addToInventory() {
    let id = this.props.match.params.id;
    let newInv = {
      name: this.state.name,
      price: this.state.price,
      image: this.state.image,
      id: this.props.match.params.id
    }

    axios.post(`/api/bin/` + id, newInv).then( res => {
      console.log('Added')
    })
  }


  render() {
    console.log(this.state);
      return (
        <div>
          <nav className='nav-container'>
            <div className='addInventoryNav'>
              <Link to={`/`}>
                <img src={ logo } alt='shelfie-pic' />
              </Link>
            </div>

            <div className='addShelfNav'>
              <Link to={`/binlist/${this.state.itemArr.shelf}`} className='addShelfLink'>
                <h1>Shelf {this.state.itemArr.shelf} </h1>
              </Link>    
            </div>

            <div className='addBinNav'>
                <h1>Add to Bin { this.props.match.params.id[1] }</h1>
            </div>
          </nav>
          <section className='addInventoryBox'>
            <div className='addInventoryContainer'>
                    
                <h3>Name</h3>
                <input onChange={ this.handleName} />
                    
                <h3>Price</h3>
                <input onChange={ this.handlePrice } 
                       placeholder="0.00"
                       type="number"/>
                    
                <h3>Image</h3>
                <input onChange={ this.handleImage }/>

                <div className='inventory-button'>
                  <Link to={`/binlist/${this.state.itemArr.shelf}`}>
                      <button onClick={ this.addToInventory }>+ Add To Inventory</button>
                  </Link> 
                </div>
               
                </div>
            </section>
    
        </div>
    )
  }
}
