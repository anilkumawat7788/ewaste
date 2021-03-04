import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
// import logo from '../../images/logo.png'
import "./navbar2.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar2">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          {/* <img className="logo_img" src={logo} alt=""/> */}
          Ewaste
            
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/service" className="nav-links " onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/industrie"  className="nav-links" onClick={closeMobileMenu}>
              Industries 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/consumer"  className="nav-links" onClick={closeMobileMenu}>
              Consumer-waste
              </Link>
            </li>
          
           
          
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
