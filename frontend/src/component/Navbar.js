import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import "../index.css"

const logout = () => {
  localStorage.clear();
  window.location.href = "/sign-in";
};
const Navbar = ({ title }) => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand text-white" href="/docdash">
          <h2>Online eHR</h2>
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
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
          <li className="nav-item ">
          
              <Link
                to="/addpatient">
                  <button
                style={{ fontSize: "20px" ,marginTop:"2px",color:"inherit", textDecoration:"inherit"}}
              
                className="nav-link btn btn-outline-info text-white rounded font-weight-bold mr-3 pt-2 nv-button">
              
                Add New Patient
                </button>
              </Link>
            
            </li>
            <li className="nav-item ">
              <button
                style={{ fontSize: "20px" }}
                onClick={logout}
                className="nav-link text-dark rounded font-weight-bold ml-1"
              >
                Logout
              </button>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/addpatient">
                Add Patient
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;