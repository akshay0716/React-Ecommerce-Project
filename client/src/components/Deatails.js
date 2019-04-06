import React, { Component } from 'react'
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import '../assets/Details.css';

export default class Deatails extends Component {
  render() {
    return (
      <React.Fragment>
         <ProductConsumer>
            {value =>{
              const {id, title, img, price, company, info, inCart } = value.detailProduct;
              return(
                  <div className="container py-2">
                      <div className="row">
                          {/* product title */}
                          <div className="col-10 mx-auto text-center text-blue my-5">
                              <h1>{title}</h1>
                          </div>
                      </div>
                      <div className="row">
                          {/* image */}
                          <div className="col-10 col-md-6 my-2 text-center">
                              <img src={img} alt='product-img' className="img-fluid"></img>
                          </div>
                          <div className="col-10 mx-auto col-md-6 my-2">
                              <h4>Modal:{title}</h4>
                              <h5>Made By:{company}</h5>
                              <h4 className="single-product-price">${price}</h4>
                              <p className="product-info"><strong>Some info about product: </strong> {info}</p>
                              {/* buttons */}
                              <div className="single-product-buttons">
                                <Link to="/">
                                  <button className="btn btn-primary mr-2">Back to Product</button>
                                </Link>
                                <button className="btn btn-primary" disabled={inCart? true:false} onClick={()=> value.AddToCart(id)}>{inCart?(<p className="mb-0" disabled>In Cart</p>):(<p className="mb-0">Add to Cart</p>)}</button>
                              </div>
                          </div>
                      </div>
                  </div>
              )
            }}
         </ProductConsumer>
      </React.Fragment>
    )
  }
}
