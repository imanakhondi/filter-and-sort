import styles from "./product.module.css"
import { BiTrash } from "react-icons/bi";



const Product = ({ product, onDecrement, onDelete, onIncrement }) => {
  return (
    <div className={styles.product}>
      <p> product name :{product.name} course</p>
      <p>product price : {product.price}</p>
      <button onClick={onDecrement} className={`${styles.but} ${product.quantity === 1 && styles.btn}`}>{product.quantity===1?<BiTrash/>:"-"}</button>
      <span className={styles.quantity}>{product.quantity}</span>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Product;
