import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import BinList from './Components/BinList/BinList';
import InventoryDetails from './Components/InventoryDetails/InventoryDetails';
import AddInventory from './Components/AddInventory/AddInventory';

export default (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/binlist/:shelf' component={BinList}/>
    <Route path='/inventory/:shelf/:id' component={InventoryDetails}/>
    <Route path='/add/:shelf/:id' component={AddInventory}/>
  </Switch>
)
