import React, { useContext, useReducer } from "react";
import {productsData} from "../../db/products"

// const initialState = [
//   { name: "react", price: 88, quantity: 1, id: 1 },
//   { name: "node-js", price: 77, quantity: 1, id: 2 },
//   { name: "javascript", price: 66, quantity: 2, id: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "deleteHandler":
      const filterdProduct = state.filter((p) => p.id !== action.id);
      return filterdProduct;
    case "incrementHandler": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;

      return updatedProducts;
    }
    case "decrementHandler": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filterdProduct = state.filter((p) => p.id !== action.id);
        return filterdProduct;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;

        return updatedProducts;
      }
    }
    case "filter": {
      
// console.log(action.event.target.value);
if(action.event.target.value===""){
  return productsData;
}else{
  const updatedProduct= productsData.filter((p)=>p.availableSize.indexOf(action.event.target.value)>=0)
console.log(updatedProduct);       
return updatedProduct;
}
      
    }

    default:
      return productsData;
  }
};

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductContext.Provider value={products}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
export const useActionProduct = () => useContext(ProductContextDispatcher);

export default ProductProvider;
