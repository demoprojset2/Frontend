import React from "react";
import Navbar from "./Navbar";
import "./Dasboard.css";
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
  const [all, setAll] = useState([])
  const [patient, setPatient] = useState({
    Id:"",
    Name: "",
    Age: "",
    Gender: "",
    Contact: "",    
    "Treatment under": "",
  });
  const [vitals, setVitals] = useState({
    Date: "",
    Height: "",
    Weight: "",
    Pulse: "",
    Temperature: "",
    "Blood Pressure": "",
  });
  const [medications, setMedications] = useState(null);
  const [allergy, setAllergy] = useState(null);
  const [problem, setProblem] = useState(null);

  const id = "436c9dae-b34b-42d9-8139-002a7d1c9353";

  const fetchPatientData = async () => {
    const resp1 = await axios.get(`api/patient/${id}/me`);
    setPatient({
      Id: resp1.data.id,
      Name: resp1.data.name,
      Age: resp1.data.dob,
      Gender: resp1.data.gender,
      Contact: resp1.data.phone_number,
      "Treatment under": resp1.data.doctor_name,
    });
    const resp2 = await axios.get(`api/patient/${id}/vitals`);
    setVitals({
      Date: resp2.data.date_added,
      Height: resp2.data.height,
      Weight: resp2.data.weight,
      Pulse: resp2.data.pulse,
      Temperature: resp2.data.temperature,
      "Blood Pressure": resp2.data.blood_pressure,
    });
    const resp3 = await axios.get(`api/patient/${id}/medications`);
    setMedications(resp3.data);
    const resp4 = await axios.get(`api/patient/${id}/allergy`);
    setAllergy(resp4.data);
    const resp5 = await axios.get(`api/patient/${id}/problem`);
    setProblem(resp5.data);
    // const resp1 = await axios.get(`https://localhost:8000/api/patient/${id}/me`)



    const fun = async (id) => {
        const { data } = await axios.get(`api/patient/${id}/dose/`)
        return data
    }

    resp3.data.map(async (el) => {
        let dta = await fun(el.id)
        let obj = {
            "Medicine":el.medication_name,
            "Description":dta.dose_description,
            "Timing":dta.dose_timing,
            "Amount":dta.dose_amount
        }
        let nw = [...all,obj]
        setAll(nw)
    })
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="body">
        <PatientsNavbar />

        <section className="content">
          <div className="box">
            <h1 className="mt-5 mb-5 text-center">Hi {patient.Name}!</h1>
            <div className="mr-5 ml-5 rounded inner-box pb-5 mb-5">
              <Scrollspy num={setComponent} selected={component} />
              {component === 1 && (
                <PatientsDetails patient={patient} vitals={vitals} />
              )}
              {component === 2 && (
              <ProblemDetails problem={problem} allergy={allergy} />
              )}
              {component === 3 && <Prescriptions all={all} />}
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
