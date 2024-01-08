import React,{useState} from "react";
import "../Navbar/navbar.css";
import { LOGO } from "../../assets/assets.jsx";

const Navbar = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
   const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>

      <div className="navbar-container">

      <div>
        <img src={LOGO} alt="logo" />
      </div>
      <div className="navbar-menu">
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>

      </div>
      <div className="login-button-container">
        <button className="login-signup">Login</button>
        <button className="green-button login-signup">Sign Up</button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
