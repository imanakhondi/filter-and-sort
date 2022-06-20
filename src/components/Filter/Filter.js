import { useState } from "react";
import { useActionProduct } from "../ProductProvider/ProductProvider";
import styles from "./filter.module.css";


const Filter = () => {
const dispatch=useActionProduct();
const[value,setValue]=useState("")

const changeHandler=(e)=>{
   dispatch({type:"filter", event:e});
   setValue(e.target.value)
}


  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <p>search for</p>
        <input placeholder="search for ..."></input>
      </div>
      <div className={styles.filter}>
        <p>filter product based on:</p>
        <div>
          <span >filter by size</span>

          <select onChange={changeHandler} value={value} >
            <option value="">Select...</option>
            <option value="2xl">2xl</option>
            <option value="xl">xl</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="s">s</option>
            <option value="xs">xs</option>
          </select>
        </div>
        <div>
         
          <span >sort by price</span>

          <select >
            <option value="">Select...</option>
            <option value="2xl">2xl</option>
            <option value="xl">xl</option>
            
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
