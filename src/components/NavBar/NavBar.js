import { useProduct } from "../ProductProvider/ProductProvider";
import "./navbar.css"

const NavBar = () => {
    const products=useProduct()
    const totalItems=products.filter((p)=>p.quantity>0).length;
    return ( 
      <div  className="navbar">
          <h2> iman Shopping</h2>
        <span>{totalItems}</span>
      </div>
     );
}
 
export default NavBar;