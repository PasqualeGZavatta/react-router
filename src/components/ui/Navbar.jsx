import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { useCartProductContext } from "../../context/CartProductContext";
export default function Navbar() {
  const { cartProduct } = useCartProductContext();
  return (
    <>
      <nav className="pe-3">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/products">Prodotti</NavLink>
        <NavLink to="/about-us">Chi siamo</NavLink>
        <NavLink to="/cart">
          <ShoppingCart size={22} />
          <span className="fixedCircleCart text-center ">
            {cartProduct.length}
          </span>
        </NavLink>
      </nav>
    </>
  );
}
