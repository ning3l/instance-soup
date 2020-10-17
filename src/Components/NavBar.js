import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function NavBar() {

    let randInt = 0;
    const handleClick = (e) => {
      randInt = Math.floor(Math.random() * 8)+1
      console.log(randInt)
      // NOT via state !
      // if randomRamen > Link zu random detailPage
      return randInt;
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/projects/${randInt}`} onClick={(e) => handleClick()}>
                Random Ramen
              </Link>
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
