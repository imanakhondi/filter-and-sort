import { useState } from "react";
import { useActionProduct } from "../ProductProvider/ProductProvider";
import styles from "./filter.module.css";

import Select from "react-select";

const Filter = () => {
  const dispatch = useActionProduct();
  const [value, setValue] = useState("");
  const [sort,setSort]=useState("");

  // const changeHandler=(e)=>{
  //    dispatch({type:"filter", event:e});
  //    setValue(e.target.value)
  // }

  const changeHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({type:"sort", selectedOption:sort});

    setValue(selectedOption);
  };

  const sortHandler=(selectedOption)=>{
    dispatch({type:"sort", selectedOption});
    setSort(selectedOption);

  }

  const options = [
    { value: "", label: "All" },
    { value: "xs", label: "xs" },
    { value: "s", label: "s" },
    { value: "m", label: "m" },
    { value: "l", label: "L" },
    { value: "xl", label: "xl" },
    { value: "2xl", label: "2xl" },
  ];
  const sortOptions = [
    { value: "highest", label: "highest" },
    { value: "lowest", label: "lowest" },
   
  ];

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <p>search for</p>
        <input placeholder="search for ..."></input>
      </div>
      <div className={styles.filter}>
        <p>filter product based on:</p>
        <div>
          <span>filter by size</span>

          {/* <select onChange={changeHandler} value={value} >
            <option value="">Select...</option>
            <option value="2xl">2xl</option>
            <option value="xl">xl</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="s">s</option>
            <option value="xs">xs</option>
          </select> */}
          <Select value={value} onChange={changeHandler} options={options} />
        </div>
        <div>
          <span>sort by price</span>

          <Select value={sort} onChange={sortHandler} options={sortOptions} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
