import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../instance_soup_logo.png';

export default function NavBar( { history } ) {

  console.log("hist from nav", history)

  const handleClick = () => {
    return Math.floor(Math.random() * 8)
  }

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
              <button type="button" className="btn btn-warning" onClick={() => history.push(`${Math.floor(Math.random()*8) + 1}`)}>random ramen</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="far fa-envelope"></i>{" "}
                <span>SOUPscripe to Newsletter</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}
