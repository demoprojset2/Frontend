import React from "react";
import Navbar from "./Navbar";
import "./Dasboard.css";
// import Sidebar from "./Sidebar"

const PatientDashboard = () => {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <section className="content">
        <div className="box">
          <h1>Hi Patient!</h1>
          <section class='cardBox background1 mt-5'>
		<div class="row card-container">
			<div class="col-md-6 card-container-container ">
				<div class="card text-center">
					<div class="card-header">
						<h3>Patient's Detail</h3>
					</div>
					<div class="card-body preamble" id="zen-preamble" role="article">
						<p class="card-text"> asdfghjk</p>
						<p class="card-text">asdfghj</p>
						<p class="card-text">sdfghj</p>
					    <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
					</div>
				</div>
		    </div>
			<div class="col-md-6 card-container-container ">
				<div class="card card1 text-center explanation" id="zen-explanation" role="article">
					<div class="card-header">
						<h3>Doctor's Detail</h3>
					</div>
					<div class="card-body preamble" id="zen-preamble" role="article">
                    <p class="card-text"> asdfghjk</p>
						<p class="card-text">asdfghj</p>
						<p class="card-text">sdfghj</p>
					    <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
					</div>
				</div>
			</div>
	</div>
	</section>
          
          {/* <div class="card text-center">
            <div class="card-header">General Information</div>
            <div class="card-body">
              
            </div>
            <div class="card-header">Vital Information</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-header">Doctor's Details</div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default PatientDashboard;
