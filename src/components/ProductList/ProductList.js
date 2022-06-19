import Product from "../Product/Product";
import {
  useActionProduct,
  useProduct,
} from "../ProductProvider/ProductProvider";

const ProductList = () => {
  const products = useProduct();
  const dispatch = useActionProduct();

  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            onDelete={()=>dispatch({ type: "deleteHandler", id: product.id })}
            onIncrement={()=>dispatch({
              type: "incrementHandler",
              id: product.id,
            })}
            onDecrement={()=>dispatch({
              type: "decrementHandler",
              id: product.id,
            })}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
