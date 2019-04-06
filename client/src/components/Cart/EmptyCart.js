import React, { Component } from 'react'

export default function EmptyCart() {
    return (
      <React.Fragment>
          <div className="container mt-5">
             <div className="row">
                  <div className="col-10 mx-auto text-center text-title">
                        <h1> Your Cart is Currently Empty </h1>
                  </div>  
             </div>
          </div>
      </React.Fragment>
    )
  }

