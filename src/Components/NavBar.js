import React from 'react';
import { Link } from "react-router-dom"; 
import '../App.css';
import logo from '../instance_soup_logo.png';

export default function NavBar({formatted}) {

  const randomizer =  () => {
          const getRandomInt = Math.floor(Math.random() * formatted.length);
          console.log("randomizer"); 
        }; 

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo of the Instance Soup Corporation" className="logo"/>
          INSTA(NCE) SOUP
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
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" >
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
            <button onClick={ console.log('lalala') } >
            Random Ramen
              {/* <Link to="/{`/projects/${el.id}`}" className="nav-link" >
                Random Ramen
              </Link> */}
            </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/subscribe">
                {" "}
                💌 Soupscripe to Newsletter
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
