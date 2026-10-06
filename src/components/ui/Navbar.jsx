import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink
          className=""
          to="/">
          Home Page
        </NavLink>
        <NavLink to="/products">Prodotti</NavLink>
        <NavLink to="/about-us">Chi siamo</NavLink>
      </nav>
    </>
  );
}
