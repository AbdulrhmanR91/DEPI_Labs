import React, { Component } from "react";
import  {products} from "../ProductData.js";
import Counter from './counter/counter';

class Products extends Component {
  render() {

    return (

      <div className="productsContainer">

        {products.map((product) => (
          <div key={product.id} className="productConainer">
            <img src={product.img} alt={product.name} className="productImage" />
            <h2 className="productName">{product.name}</h2>
            <p className="productDescription">{product.description}</p>
            <p className="productPrice">${product.price}</p>

            <div className="counercontainer">
            <Counter/>
                </div>
            
          
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
