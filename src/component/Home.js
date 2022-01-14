import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = ({ setTitle }) => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <div className="header-content" id="header">
          <h1 style={{ fontSize: "5rem" }}>Improving Lives Together</h1>
          <h2>Taking Healthcare Innovation into High Gear</h2>

          <h4 style={{ paddingTop: "50px" }}>Log In Here!</h4>
          <div>
            <Link to="/sign-up">
              <button class="btn btn-light btn-lg mr-5">Doctors</button>
            </Link>
            <Link to="/patient-login" >
              <button class="btn btn-outline-light btn-lg ml-5">
                Patients
              </button>
            </Link>
          </div>
        </div>

        <div class="box2">
          <div class="part-container">
            <div class="participation" id="zen-participation" role="article">
              <h2>How to get Started</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
          <div class="beni-container">
            <div class="benefits" id="zen-benefits" role="article">
              <h2>Benefits</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
