import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import "../assets/Navbar.css"

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
         <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
         {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk    */}

          <Link to="/"><img src={logo} className="navbar-brand" alt="logo"></img></Link> 

            <ul className="navllist-item ml-5">
                <li className="nav-item ml-5">  
                    <Link to="/" className="nav-link">
                        products
                    </Link>
                </li>
            </ul> 
            <Link to="/cart">
                <button className="btn btn-primary"><i className="fas fa-shopping-cart mr-2"></i>My Cart</button>
            </Link>
         </nav>
      </React.Fragment>
    )
  }
}
