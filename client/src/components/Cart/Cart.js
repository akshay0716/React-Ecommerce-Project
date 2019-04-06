import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Title from './../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../Context";
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>

          <ProductConsumer>
              {
                (value)=>{

                  const {cart} = value;

                  if(cart.length > 0){
                    return (
                      <section>
                        <Title name='Your' title='Cart'></Title>
                        <CartColumns/>
                        <CartList value={value}/>
                        <CartTotals value={value}/>
                      </section>
                    )
                  }
                  else{
                    return (
                      <EmptyCart/>
                    )
                  }
                }
              }
          </ProductConsumer>
      </React.Fragment>
    )
  }
}
