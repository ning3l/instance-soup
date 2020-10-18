import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../App.css';
import logo from '../images/instance_soup_logo.png';

export default function NavBar() {

  let history = useHistory();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="#">
            <div><img src={logo} alt="Logo of the Instance Soup Corporation" className="logo"/></div>
          </a>
          <div>
          <h2 className="text-center mr-3">INSTA(NCE) SOUP</h2>
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
              <Link className="nav-link mr-3 home" to="/projects">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-warning" onClick={() => history.push(`/projects/${Math.floor(Math.random()*8) + 1}`)}>random ramen</button>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Enter your Email" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="far fa-envelope"></i>{" "}<span>SOUPscripe</span></button>
          </form>
        </div>
      </nav>
    );
}
