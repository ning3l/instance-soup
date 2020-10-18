import React from 'react'

export default function Footer() {
    return (
      <nav className="navbar-light bg-light" style={{height: "3em"}}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link d-flex align-items-center text-dark" href="https://github.com/ning3l/instance-soup"><span>copyPASTA our code from... </span><i className="fab fa-github fa-2x"></i></a>
          </li>
        </ul>
      </nav>
    );
}
