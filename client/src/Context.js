import React, { Component } from 'react'
import Product from './components/Product';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();  
// create context comes with two component
//Provider  
//Consumer

class ProductProvider extends Component {
state = {
    storeProducts:[],
    detailProduct:detailProduct,
    cart:[],
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
};


componentWillMount(){
  this.setProducts();
}

setProducts = () =>{
    let tempProduct = [];
    storeProducts.forEach(item =>{

      const singleProduct = {...item};
      
      tempProduct = [...tempProduct,singleProduct];

    });

    this.setState({
      storeProducts:tempProduct
    });
};

getItem = id => {
    const product = this.state.storeProducts.find(item => item.id===id );
    return product;
};


handleDetail = id => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })
};

AddToCart = id =>{
    let tempProduct = [...this.state.storeProducts];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count=1;
    const price = product.price;
    product.total = price;

    this.setState(
      ()=> {
      return {
        storeProducts:tempProduct, 
        cart:[...this.state.cart,product]
      };
      },
      () => {
        this.addTotals();
      }
    );
};


openModal = id =>{
  const product = this.getItem(id);
  this.setState(()=>{
    return { modalProduct:product,modalOpen:true}
  });
};

closeModal = () =>{
  console.log('model is closed');
  this.setState(()=>{
    return {modalOpen:false}
  });
};

increment = id =>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id===id)
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(()=>{
      return{cart:[...tempCart]}
    },()=>{
      this.addTotals();
    })


}

decrement = id =>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id===id)
  
  const index = tempCart.indexOf(selectedProduct);
  const product = tempCart[index];

  product.count = product.count -1;

  if(product.count === 0 ){
    this.removeItem(id)
  }else{
    product.total =product.count * product.price;
    this.setState(()=>{
      return{cart:[...tempCart]}
    },()=>{
      this.addTotals();
    })
  }
}

removeItem = id =>{
  let tempProduct = [...this.state.storeProducts];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(item => item.id !== id );

  const index = tempProduct.indexOf(this.getItem(id));
  let removedProduct = tempProduct[index];
  removedProduct.inCart =false;
  removedProduct.count = 0;
  removedProduct.total = 0;

  this.setState(
    ()=>{
    return{
      cart:[...tempCart],
      products:[...tempProduct]
    };
  },()=>{
    this.addTotals();
  })
}

clearCart = () =>{
  this.setState(()=>{
    return {cart:[]};
  },()=>{
      this.setProducts();
      this.addTotals();
  });
};

addTotals = () =>{
  let subTotal = 0;
  this.state.cart.map(item =>(subTotal += item.total));
  const tempTax = subTotal * 0.1;
  console.log(tempTax);
  const tax = parseFloat(tempTax.toFixed(2));
  const total =subTotal + tax;
  this.setState(()=>{
    return {
      cartSubTotal:subTotal,
      cartTax:tax,
      cartTotal:total
    }
  })
};


  render() {
    return (
      <ProductContext.Provider value={{
          ...this.state,
          handleDetail:this.handleDetail,
          AddToCart:this.AddToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
          increment:this.increment,
          decrement:this.decrement,
          removeItem:this.removeItem,
          clearCart:this.clearCart

      }}>
      
         { this.props.children }          
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};