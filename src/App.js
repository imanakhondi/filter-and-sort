import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProductList from "./components/ProductList/ProductList";
import ProductProvider from "./components/ProductProvider/ProductProvider";

const App = () => {
  return (
    <div>
      <ProductProvider>
        <NavBar />
        <ProductList />
      </ProductProvider>
    </div>
  );
};

export default App;
