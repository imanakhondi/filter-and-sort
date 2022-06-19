import React, { useContext, useReducer } from "react";

const initialState = [
  { name: "react", price: 88, quantity: 1, id: 1 },
  { name: "node-js", price: 77, quantity: 1, id: 2 },
  { name: "javascript", price: 66, quantity: 2, id: 3 },
];

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

    default:
      return initialState;
  }
};

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);

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
