import "./App.css";
import Search from "./common/search/search";
import Filter from "./components/Filter/Filter";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import ProductProvider from "./components/ProductProvider/ProductProvider";

const App = () => {
  return (
    <div className="App">
      <ProductProvider>
        <NavBar />
        <Search />
        <Filter />
        <ProductList />
      </ProductProvider>
    </div>
  );
};

export default App;
