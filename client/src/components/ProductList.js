import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context';


export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>
          <div className="container mb-5">
            <div className="row">
                <Title name='Our' title="Products"></Title>
            </div>
            {/* product row */}
            <div className="row">
              <ProductConsumer>
                  {value =>{
                    return value.storeProducts.map(product => {
                      return <Product key={product.id} product={product}/>;
                    })
                  }}  
              </ProductConsumer>
            </div>
          </div>
          
      </React.Fragment>
    )
  }
}
