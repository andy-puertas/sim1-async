import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../Assets/logo.png';
import './InventoryDetails.css';


export default class InventoryDetails extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      name: '',
      price: '',
      editToggle: false
    }
    this.handleEdit = this.handleEdit.bind( this );
    this.handleSave = this.handleSave.bind( this );
    this.handleNameChange = this.handleNameChange.bind( this );
    this.handlePriceChange = this.handlePriceChange.bind( this )
    this.handleSave = this.handleSave.bind( this );
    this.delete = this.delete.bind( this );
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`/api/bin/` + id).then( res => {
      console.log(res.data);
      this.setState({
        item: res.data[0]
      })
    })
  }


  handleEdit() {
    this.setState({
      editToggle: true
    })
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handlePriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }


  handleSave() {
    let id = this.props.match.params.id;
    let editing = {
      name: this.state.name,
      price: this.state.price
    }

    axios.put(`/api/bin/` + id, editing).then(res => {
      this.setState({
          editToggle: false
      })
    })
    axios.get(`/api/bin/` + id).then( res => {
      console.log(res.data);
      this.setState({
        item: res.data[0]
      })
    })

  }

  delete() {
    let id = this.props.match.params.id;
    axios.delete(`/api/bin/` + id).then(res => {
      console.log('Deleted !');
      //res.data;
    })
  }
  


  render() {
    console.log(this.state);
    
    const item = this.state.item;
      return (
       <div>
         <nav className='invNavContainer'>
          <div className='inventoryListNav'>
            <Link to={`/`}>
              <img src={ logo } alt='shelfie-logo' />
            </Link>
          </div>
          
          <div className='inventoryShelfNav'>
            <Link to={`/binlist/${item.shelf}`} className='shelfye'>
              <h1>Shelf {item.shelf}</h1>
            </Link> 
          </div>

          <div className='inventoryBinNav'>
            <h1>Bin { item.bin }</h1>
          </div>

         </nav>

         <section className='inv-container'>
          <div className='item-image'>
            <img src={item.image} alt='inventory-pic'/>
          </div>

          <div className='info-container'>
            <h3>Name</h3>
            <input disabled={!this.state.editToggle}
                   placeholder={ item.name }
                   value={this.state.name} 
                   onChange={this.handleNameChange}/>

             <h3>Price</h3>
             <input disabled={!this.state.editToggle}
                    placeholder={ item.price }
                    value={this.state.price} 
                    onChange={this.handlePriceChange}
                    type='number'/>

              <div className='invButtonContainer'>

                {
                  !this.state.editToggle ? <button onClick={this.handleEdit}>Edit</button>
                
                :  
                  <button id='save-button' onClick={this.handleSave}>Save</button>
                }
                <Link to={`/binlist/${item.shelf}`}>
                  <button onClick={this.delete}>Delete</button>
                </Link>

              </div>            
          </div>
           
        </section> 

      </div> 
      
    )
  }
}
                                
                                    
                            
                                    

