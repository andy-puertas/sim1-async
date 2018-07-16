import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h4>Shelves:</h4>
          <div className='shelves'>
              <div className='shelf'>Shelf A</div>
              <div className='shelf'>Shelf B</div>
              <div className='shelf'>Shelf C</div>
              <div className='shelf'>Shelf D</div>
          </div>
      </div>
    )
  }
}
