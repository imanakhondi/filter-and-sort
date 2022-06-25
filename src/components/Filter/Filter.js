import { useState } from "react";
import { useActionProduct } from "../ProductProvider/ProductProvider";
import styles from "./filter.module.css";
import Search from "../../common/search/search";

// import Select from "react-select";
import SelectComponent from "../../common/select/SelectComponent";

const Filter = () => {
  const dispatch = useActionProduct();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // const changeHandler=(e)=>{
  //    dispatch({type:"filter", event:e});
  //    setValue(e.target.value)
  // }

  const filterHandler = (selectedOption) => {
    // console.log(selectedOption);
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });

    setFilter(selectedOption);
  };

  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };

  const filterOptions = [
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
         <Search filter={filter} />
      <div className={styles.filter}>
        <p>filter product based on:</p>
        {/* <div>
          <span>filter by size</span> */}

        {/* <select onChange={changeHandler} value={value} >
            <option value="">Select...</option>
            <option value="2xl">2xl</option>
            <option value="xl">xl</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="s">s</option>
            <option value="xs">xs</option>
          </select> */}
        {/* <Select value={filter} onChange={filterHandler} options={filterOptions} />
        </div>
        <div>
          <span>sort by price</span>

          <Select value={sort} onChange={sortHandler} options={sortOptions} />
        </div> */}
        <SelectComponent
          title="filter by size"
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
        />
        <SelectComponent
          title="sort by price"
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
        />
      </div>
    </div>
  );
};

export default Filter;
