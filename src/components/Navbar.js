import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";
import MyImage from "/Users/kudakadira/Documents/acc-services-test/src/Acc-Services-Logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => navRef.current.classList.toggle("responsive_nav");

  return (
    <header>
      <img src={MyImage} alt="" className="logo-image" />
      <h4 className="logo-text">Accountant Services</h4>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Register</a>
        <a href="/#">Services</a>
        <a href="/#">Update</a>
        <a href="/#">Blog</a>
        <a href="/#" className="sign-in-btn">
          Sign In
        </a>
        <a href="/#">Contact Us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
