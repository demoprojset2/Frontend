import React, { Component } from "react";
// import { BrowserRouter as Router, Route, NavLink,Routes } from "react-router-dom";
// import { useState } from 'react';
// // import './App.css';
// import Footer from './component/Footer';
// import Home from './component/Home';
// import Navbar from './component/Navbar';
// import SignUpForm from "./component/SignUpForm";
// import SignInForm from "./component/SignInForm";
// import PatientLogin from "./component/Patientlogin";
// import Doctor from "./component/Doc";

// import Body from "./component/Body";

// import Home from "./component/Home"
import Doctor from "./components/Doctor"

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
      // <Router >
      //   <div className="">
          
            
            
      //       <Routes>
      //         <Route exact path="/" element={<Home />} ></Route>
      //         {/* <div className="App"> */}
      //         <Route path="/sign-up" element={<SignUpForm />} ></Route>
      //         <Route path="/sign-in" element={<SignInForm />} />
      //         <Route path="/patient-login" element={<PatientLogin />} />
      //         <Route path="/doctor" element={<Doctor />} />

      //         <Route exact path="/body" element={<Body />} ></Route>
      //         {/* </div> */}
              
      //       </Routes>
      //     </div>
        
      // </Router>
      <Doctor/>
    );
  }
}

export default App;


