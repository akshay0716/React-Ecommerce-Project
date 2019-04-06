import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { ProductConsumer} from '../Context';
import '../assets/Product.css';
import PropTypes from 'prop-types';

export default class Product extends Component {

  render() {
    const {id, title, img, price, inCart } = this.props.product;
    
    return (
      <React.Fragment>
          <div className="col-9 mx-auto col-md-6 col-lg-3 my-4 product-container">
              <div className="card">
                  <ProductConsumer>
                    {(value)=>(
                        <div className="img-container p-5" onClick={()=> value.handleDetail(id)} >
                          <Link to="/details">
                              <img src={img} className="img-fluid card-img-top" alt="product-img"></img>
                          </Link>
                          <button className="addcart-btn" disabled={inCart?true:false} onClick={()=>{value.AddToCart(id);value.openModal(id)}}>
                                {inCart?(<p className="text-capitalize mb-0" disabled>In Cart</p>):(<i className="fas fa-cart-plus"></i>)}
                          </button>
                        </div>
                    )}   
                  </ProductConsumer>
                  {/* card footer */}
                  <div className="card-footer d-flex justify-content-between">
                      <p className="align-self-center mb-0">
                        {title}
                      </p>
                      <h5 className="text-blue font-italic mb-0">
                          <span className="mr-1">$</span>
                          {price}
                      </h5>
                  </div>
              </div>
          </div>
      </React.Fragment>
    )
  }
}


Product.propTypes = {
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    tilte:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
  }).isRequired
}