import React from "react";
import Navbar from "./Navbar";
import "./Dasboard.css";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Card from "./Card";
import PatientsNavbar from "./patient/PatientsNavbar";
import Scrollspy from "./patient/Scrollspy";
import PatientsDetails from "./patient/PatientsDetails";
import ProblemDetails from "./patient/ProblemDetails";
import Prescriptions from "./patient/Prescriptions";

const PatientDashboard = () => {
  const [component, setComponent] = useState(1);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setEmail] = useState("");
  const [speciality, setSpeciality] = useState("");

  const add = async () => {
    const resp = await axios
      .post
      // api
      ();
    if (resp.data.success) {
      navigate("/result", { state: resp.data.data });
    } else {
      navigate("/error");
    }
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="body">
        <PatientsNavbar />

        <section className="content">
          <div className="box">
            <h1 className="mt-5 mb-5 text-center">Hi Patient!</h1>
            <div className="mr-5 ml-5 rounded inner-box pb-5 mb-5">
              <Scrollspy num={setComponent} selected={component} />
              {component===1 && <PatientsDetails /> }
              {component===2 && <ProblemDetails /> }
              {component===3 && <Prescriptions /> }
            </div>
            
            
          </div>
        </section>
      </div>

     
    </div>
  );
};

// const PatientDashboard = () => {
//   return (
//     <div>
//       <Navbar />
//       <section className="content">
//         <div className="box">
//           <h1>Hi Patient!</h1>
//           <section class='cardBox background1 mt-5'>
// 		<div class="row card-container">
// 			<div class="col-md-6 card-container-container ">
// 				<div class="card text-center">
// 					<div class="card-header">
// 						<h3>Patient's Detail</h3>
// 					</div>
// 					<div class="card-body preamble" id="zen-preamble" role="article">
// 						<p class="card-text"> asdfghjk</p>
// 						<p class="card-text">asdfghj</p>
// 						<p class="card-text">sdfghj</p>
// 					    <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
// 					</div>
// 				</div>
// 		    </div>
// 			<div class="col-md-6 card-container-container ">
// 				<div class="card card1 text-center explanation" id="zen-explanation" role="article">
// 					<div class="card-header">
// 						<h3>Doctor's Detail</h3>
// 					</div>
// 					<div class="card-body preamble" id="zen-preamble" role="article">
//                     <p class="card-text"> asdfghjk</p>
// 						<p class="card-text">asdfghj</p>
// 						<p class="card-text">sdfghj</p>
// 					    <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
//                         <p class="card-text">asdfghjknbv </p>
// 					</div>
// 				</div>
// 			</div>
// 	</div>
// 	</section>

//           <div class="card text-center">
//             <div class="card-header">General Information</div>
//             <div class="card-body">

//             </div>
//             <div class="card-header">Vital Information</div>
//             <div class="card-body">
//               <h5 class="card-title">Special title treatment</h5>
//               <p class="card-text">
//                 With supporting text below as a natural lead-in to additional
//                 content.
//               </p>
//             </div>
//             <div class="card-header">Doctor's Details</div>
//             <div class="card-body">
//               <h5 class="card-title">Special title treatment</h5>
//               <p class="card-text">
//                 With supporting text below as a natural lead-in to additional
//                 content.
//               </p>
//             </div>
//           </div>
//         <h1>
//           Vital Details
//         </h1>

//         </div>
//       </section>
//     </div>
//   );
// };

export default PatientDashboard;
