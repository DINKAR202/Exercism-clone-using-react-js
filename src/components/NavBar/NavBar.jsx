import React from "react";
import "./Navbar.scss";
import companylogo from "../img/asset 0.svg";

const NavBar = () => {
  return (
    <>
     <div className=" border-bottom">
     <nav className="navbar container navbar-expand-lg navbar-light">
        <a className="navbar-brand me-5" href="#">
          <img src={companylogo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto mt-1">
            <li className="nav-item active me-4">
              <a className="nav-link text-primary" href="#">
                <b>Learn</b>
              </a>
            </li>
            <li className="nav-item active me-4">
              <a className="nav-link text-primary" href="#">
                <b>Discover</b>
              </a>
            </li>
            <li className="nav-item active me-4">
              <a className="nav-link text-primary" href="#">
                <b>Contribute</b>
              </a>
            </li>
            <li className="nav-item active me-4">
              <a className="nav-link text-primary" href="#">
                <b>More</b>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto">
            <li>
              <button type="button" class="me-2 btn btn-primary shadow">
                <b>Sign up</b>
              </button>
              <button type="button" class="btn btn-outline-primary shadow">
                <b>Log in</b>
              </button>
            </li>
          </ul>
        </div>
      </nav>
     </div>
    </>
  );
};

export default NavBar;
