import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './InventoryDetails.css';
import axios from 'axios';


export default class InventoryDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      img: "",
      disabled: true
    }
    this.editToggle = this.editToggle.bind( this );
    this.handleSave = this.handleSave.bind( this );
    this.delete = this.delete.bind( this );
  }

  componentDidMount() {
    axios.get(`/api/item/${this.props.match.params.shelf}/${this.props.match.params.id}`)
    .then( res => {
      console.log(res.data);
      this.setState({ 
        name: res.data[0].name, 
        price: res.data[0].price, 
        img: res.data[0].img 
      })
    })
  }


  editToggle() {
    this.setState({
      disabled: !this.state.disabled
    })
  }

  handleNameChange(val) {
    this.setState({
      name: val
    })
  }

  handlePriceChange(val) {
    this.setState({
      price: val
    })
  }


  handleSave() {
    axios.put(`/api/item/${this.props.match.params.shelf}/${this.props.match.params.id}`,
    {name: this.state.name, price: this.state.price, img: this.state.img})
    .then( res => {
      console.log(res.data);
      this.setState({
        name: res.data[0].name,
        price: res.data[0].price,
        img: res.data[0].img,
        disabled: true
      })
    })
  }

  delete() {
    axios.delete(`/api/item/${this.props.match.params.shelf}/${this.props.match.params.id}`)
    .then( res => {
      console.log(res.data);
    })
  }
  


  render() {
    console.log(this.state);
      return (
        <div>
          <div className="inv-details">
            <div className="input-wpr">
              <img src={this.state.img} alt="" className="bin-img"/>
                <div className="input-fields">
                  <h2 className="input-label">Name</h2>
                  <input onChange={ (e) => this.handleNameChange( e.target.value ) } 
                            type="text" 
                            className="input-name-box"
                            disabled={this.state.disabled}
                            value={this.state.name}/>
                  <h2 className="input-label">Price</h2>
                      <input onChange={ (e) => this.handlePriceChange( e.target.value ) } 
                                type="number"
                                className="input-price-box"
                                disabled={this.state.disabled}
                                value={this.state.price}/>
              </div>
              { this.state.disabled === true ?   
                <div className="inv-btn-wpr">
                    <button onClick={this.editToggle} className="inv-edit-btn">Edit</button>
                    <Link to ={`/binlist/${this.props.match.params.shelf}`}> 
                      <button onClick={this.delete} className="inv-del-btn">Delete</button> 
                    </Link>
                </div>
                  :
                    <div className="inv-btn-wpr">
                      <button onClick={this.handleSave} className="inv-save-btn">Save</button>
                      <Link to ={`/binlist/${this.props.match.params.shelf}`}>  
                        <button onClick={this.delete} className="inv-del-btn">Delete</button>
                      </Link>
                    </div>
              }
                                
          </div>
        </div>
      </div>
    )
  }
}
                                
                                    
                            
                                    

