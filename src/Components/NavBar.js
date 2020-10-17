import React from 'react';
import '../App.css';
import logo from '../instance_soup_logo.png';

export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <div><img src={logo} alt="Logo of the Instance Soup Corporation" className="logo"/></div>
          </a>
          <div>
          <h2 className="text-center">INSTA(NCE) SOUP</h2>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Random Ramen
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                💌 Soupscripe to Newsletter
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
