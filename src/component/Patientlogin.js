import React, { Component } from "react";
import { NavLink, Link, Redirect,Router,withRouter } from "react-router-dom";
import "../App.css"

import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";

class PatientLogin extends Component {
  constructor() {
    super();

    this.state = {
      patient_id: "",

   
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;

    let name = target.name;

    // this.setState({
    //   [name]: value
    // });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
 
 
    
  }

  render() {
   
    return (
      <div className="App">
        <div className="appAside" />
          <div className="appForm">
          <div className="formCenter pageSwitcher">
          <NavLink
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Home
              </NavLink>
          </div>
      
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" >
              Patient Id
            </label>
            <input
              type="text"
              id="patient_id"
              className="formFieldInput"
              placeholder="Enter Patient Id"
              name="patient_id"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/" className="formFieldLink">
              
            </Link>
          </div>

        </form>
        
      </div>
      </div>
      </div>
    );
  }
}

export default PatientLogin;
