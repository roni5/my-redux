import React from "react";
// import logo from "../images/logo3.png";

const NavBar = () => {
  return (
    <nav className="nav-wrapper blue darken-1">
      <div className="container">
        <a
          href="/"
          className="brand-logo left"
          style={{ top: 0, paddingTop: 0 }}
        >
          Shopwiz.net
          {/* <img src={logo} alt="logo" style={{height:60, width: 160, paddingTop:12}} /> */}
        </a>
        <ul className="right">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            {" "}
            <a href="/contact">Contact</a>
          </li>
          <li>
            {" "}
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
