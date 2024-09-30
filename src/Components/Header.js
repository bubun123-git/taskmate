import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <Link href="/" className="logo">
        <img src={logo} alt="" />
        <span style={{color:"whitesmoke", marginLeft: "10px"}}>RouteMate</span>
      </Link>
      <nav className="navigation">
        <Link className="link" to="/" end>
          Home
        </Link>
        <Link to="/products">Products</Link>
        <Link to="/product/:id">ProductsList</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
