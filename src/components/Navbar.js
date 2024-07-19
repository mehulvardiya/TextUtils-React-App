import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <label className="form-check-label mx-5" htmlFor="flexSwitchCheckDefault">
            Enable LightMode
          </label>
          <input
          onClick={props.toggleMode}
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "About",
};
