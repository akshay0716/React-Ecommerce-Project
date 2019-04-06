import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import Home from "./components/Home";
import "./App.css";
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Deatails from './components/Deatails';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      
              
                <div>
                  <Navbar/>
                  <Switch>
                  <Route exact path="/" component={ProductList} ></Route>
                  <Route exact path="/details" component={Deatails} ></Route>
                  <Route exact path="/cart" component={Cart} ></Route>
                  <Route component={Default} ></Route>
                  </Switch>
                  <Modal/>
                </div>
            
     
    );
  }
}

export default App;
