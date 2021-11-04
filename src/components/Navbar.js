import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [ac, setac] = useState("nav-link active");
  const [bc, setbc] = useState("nav-link");

  const act = () => {
    setac("nav-link active");
    setbc("nav-link");
    document.title = "MyRealDream -Home";
  };

  const bct = () => {
    setac("nav-link");
    setbc("nav-link active");
    document.title = "MyRealDream -About";
  };
  return (
    <div style={{position: "sticky", top:'0px', zIndex:'2'}}>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={props.TitleHref} onClick={act}>
            {props.Title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={ac} aria-current="page" to="/" onClick={act}>
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={bc} onClick={bct}>
                  <b>About</b>
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch mx-3 text-${props.TextMode}`}
            >
              <input
                onClick={props.TheMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark
              </label>
            </div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Todo: Title= "Enter your Title Default is Title"
// Todo: TitleHerf= "Enter your title herf link"

Navbar.propTypes = {
  Title: PropTypes.string,
  TitleHref: PropTypes.string,
};

Navbar.defaultProps = {
  Title: "Title",
  TitleHref: "/",
};
