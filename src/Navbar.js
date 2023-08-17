import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
    <div>
      <nav>
      <div style={{display:'block'}}>
        <div className="upper">
          <div className="left">
            <img
              className="logo"
              src={require("./Images/logopng.png")}
              width={"50px"}
              alt="logo"
            />
          </div>
          <div className="mid">
            <ul className="navbar">
              <li className="dropdown">
                <a href="https://www.google.com/">Academia</a>
                <div class="dropdown-content">
                  <a href=" ">SkillUp Programs</a>
                  <a href=" ">Job Track Courses</a>
                </div>
              </li>
              <li>
                <a href="https://www.google.com/">CTF Warriors</a>
              </li>
              <li>
                <a href="https://www.google.com/">Business Solutions</a>
              </li>
              <li className="dropdown">
                <a href="https://www.google.com/">
                  Resources
                </a>
                <div class="dropdown-content">
                  <a href=" ">About Us</a>
                  <a href=" ">Contact Us</a>
                  <a href=" ">Blogs</a>
                  <a href=" ">Cyberyami Forum</a>
                  <a className="discord" href=" ">
                    <i className="fa-brands fa-discord dcicon"></i>Join Discord
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="right-item">
             
              <i class="fa-solid fa-cart-shopping cart-logo"></i>
            </div>
            <div className="right-item">
             
              <button className="btn1">Sign Up</button>
            </div>
            <div className="right-item">
             
              <button className="btn2">Login</button>
            </div>
          </div>
        </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
