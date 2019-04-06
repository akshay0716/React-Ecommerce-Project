import React, { Component } from 'react'
import CartItem from './CartItem';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../../Context';

export default function CartList ({value}) {   
    const{ cart} = value;
    return (
      <React.Fragment>
          <div className="container">
            {
              cart.map(item => {
                return (<CartItem key={item.id} item={item} value={value}/>)
              })
            }
          </div>
      </React.Fragment>
    )
  }