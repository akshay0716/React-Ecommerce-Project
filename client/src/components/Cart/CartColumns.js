import React, { Component } from 'react'

export default function CartColumns() {
    return (
      <React.Fragment>
         <div className="container my-5 d-none d-md-block text-center">
            <div className="row">
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Products</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Name of Products</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Price</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-10 mx-auto col-md-2">
                    <p className="text-uppercase">Total</p>
                </div>
            </div>
         </div>
      </React.Fragment>
    )
  }
