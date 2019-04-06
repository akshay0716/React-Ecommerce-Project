import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import "../assets/Modal.css";

export default class Modal extends Component {
  render() {
    return (
      <React.Fragment>
         <ProductConsumer>
             {(value)=>{
                 const {openModal,closeModal,modalOpen} = value;
                 const {title,price,img} = value.modalProduct;
                
                 if(!modalOpen){
                     return null;
                    
                 }else{
                    return (
                        <div id="modal" className="container product-modal-container text-center p-5">
                            <div className="row">
                                <div className="col-8 mx-auto col-md-12">
                                    <h5>Item Added to Cart</h5>
                                    <img src={img} alt="modal-img" className="img-fluid"></img>
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">Price : ${price}</h5>
                                    <Link to="/">
                                        <button className="btn btn-light mx-2" onClick={()=> closeModal()}>
                                            Continew Shopping
                                        </button>
                                    </Link>
                                    <Link to="/cart">
                                        <button className="btn btn-light mx-2" onClick={()=> closeModal()}>
                                                Go to Cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                 }
             }}
         </ProductConsumer>     
      </React.Fragment>
    )
  }
}
