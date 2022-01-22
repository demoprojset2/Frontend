import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink,Routes } from "react-router-dom";
import { useState } from 'react';
// import './App.css';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import SignUpForm from "./component/SignUpForm";
import SignInForm from "./component/SignInForm";
import PatientLogin from "./component/Patientlogin";
import DoctorDashboard from "./component/DoctorDashboard";
import PatientDashboard from './component/PatientDashboard'
// import ProblemDetails from "./component/patient/ProblemDetails";
import Prescriptions from "./component/patient/Prescriptions";
import EditPatient from "./component/EditPatient"
import AddPatient from "./component/AddPatient"
import AddDetails from "./component/AddDetails";
// import Home from "./component/Home"

// function App() {
//   const [title, setTitle] = useState("Healthcare")
//   return (
//     <Router>
//     <div className="app">
//       <Navbar title={title} />
//       <Home setTitle={setTitle} />
//       <Footer />
//     </div>
//     <div>
//       <Switch>
//         <Route path="/sign-up">

//         </Route>
//       </Switch>
//     </div>
    

//     </Router>
//   );
// }
class App extends Component {
  render() {
    return (
      <Router >
        <div className="">
          
            
            
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/sign-up" element={<SignUpForm />} ></Route>
              <Route path="/sign-in" element={<SignInForm />} />
              <Route path="/add_details" element={<AddDetails />} />
            <Route  path="/docdash" element={<DoctorDashboard />} ></Route>
            <Route path="/patient-login" element={<PatientLogin />} />
              <Route path="/patient-dashboard/:id" element={<PatientDashboard />} />

              {/* <Route path="/problem-details" element={<ProblemDetails />} /> */}
              <Route path="/prescriptions" element={<Prescriptions />} />
              <Route  path="/editpatient" element={<EditPatient />} ></Route>
              <Route  path="/addpatient" element={<AddPatient />} ></Route>



              {/* </div> */}
              
            </Routes>
          </div>
        
      </Router>
    );
  }
}

export default App;


