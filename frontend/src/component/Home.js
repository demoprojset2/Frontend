import {React , useEffect} from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";
const Home = ({ setTitle }) => {
 
  return (
    <Fragment>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        <a className="navbar-brand text-white" href="/">
          <h2>Online eHR</h2>
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/docdash">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
         
         
           
          </ul>
        </div> */}
      </nav>
      <div>
        <div className="header-content" id="header">
          <h1 style={{ fontSize: "4.5rem" }} className="pr-pb-3 heading_line">Improving Lives Together</h1>
          <h2>Taking Healthcare Innovation into High Gear</h2>

          <h4 style={{ paddingTop: "50px" }}>Log In Here!</h4>
          <div>
            <Link to="/sign-up">
              <button class="btn btn-outline-light btn-lg mr-4">Doctors</button>
            </Link>
            <Link to="/patient-login" >
              <button class="btn btn-outline-light btn-lg ml-4">
                Patients
              </button>
            </Link>
          </div>
        </div>

        <div class="box2 pb-5 pt-5">
          <div class="part-container">
            <div class="participation" id="zen-participation" role="article">
              <h2>How to get Started</h2>
              <p>
              For the past century, health care measurement and delivery have been centered in hospitals and clinics. That is beginning to change as health measures and increasingly care delivery are migrating to homes and mobile devices. The COVID-19 pandemic has only accelerated this transition. While increasing access to care and improving convenience, this move toward platforms operated by for-profit firms raises concerns about privacy, equity, and duty that will have to be addressed.
              </p>
            </div>
            <div class="part-image-container">
              <img
                src="https://cdn0.iconfinder.com/data/icons/shopping-mall-2/300/20-06-05-Shopping-mall-icons-svg-20-512.png"
                alt="part-image"
                class="part-image"
              />
            </div>
          </div>
          {/* <div class='hr'><hr></div> */}
          <div class="beni-container d-flex">
            <div class="benefits" id="zen-benefits" role="article">
              <h2>Benefits</h2>
              <p>
              These developments are part of a broader migration of care from hospitals and clinics to home and mobile devices. Everything from acute stroke care (mobile stroke units) to hospitalizations for pneumonia (hospital at home) are moving toward the home. This transition mirrors what has already occurred in other industries, such as entertainment, banking, and retail.
              </p>
            </div>
            <div class="beni-image-container">
              <img
                src="https://i.pinimg.com/236x/d0/43/74/d0437437130a3d48e00862360171b6c7.jpg"
                alt="part-image"
                class="beni-image"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
