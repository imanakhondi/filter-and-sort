import "./App.css";

import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import ProductProvider from "./components/ProductProvider/ProductProvider";

const App = () => {
  return (
    <div className="App">
      <ProductProvider>
        <NavBar />

        <Filter />
        <ProductList />
      </ProductProvider>
    </div>
  );
};

export default App;
