import { useState } from "react";
import { useActionProduct } from "../../components/ProductProvider/ProductProvider";
const Search = ({filter}) => {
  const dispatch = useActionProduct();

  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div>
      <p>search for</p>
      <input
        type="text"
        placeholder="search for ..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Search;
