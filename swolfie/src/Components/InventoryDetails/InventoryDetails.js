import React, { Component } from 'react';
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
  }

  componentDidMount() {
    let promise = axios.get(`/api/item/${this.props.match.params.shelf}/${this.props.match.params.id}`)
    promise.then( res => {
      console.log(res.data);
      this.setState({ name: res.data[0].name, 
                      price: res.data[0].price, 
                      img: res.data[0].img })
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
                      <div className="dollar-symbol">
                        <input onChange={ (e) => this.handlePriceChange( e.target.value ) } 
                                className="input-price-box"
                                disabled={this.state.disabled}
                                value={this.state.price}/>
                        </div>
                    </div>
            </div>
          </div>
        </div>
      )
  }
}

