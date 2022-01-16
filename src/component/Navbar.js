import { Navigate } from "react-router-dom";
import {useEffect } from "react";


const logout = () => {
  localStorage.clear();
  window.location.href = "/sign-in"

}
const Navbar = ({title}) => {

 
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        <a className="navbar-brand text-white" href="/docdash">
          Healthcare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
          
            <li  className="nav-item ">
              <button onClick={logout} className="nav-link btn-danger text-white rounded" >
                log out
              </button>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
