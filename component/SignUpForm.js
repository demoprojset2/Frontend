import React, { Component } from "react";
import { NavLink,Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword:"",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.password !== this.state.confirmPassword){
      toast("Password fields Not Matching")
    }
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      
      <div className="App">
      <ToastContainer />
        <div className="appAside" />
          <div className="appForm">
          <div className="formCenter">
        <div className="pageSwitcher">
              <Link
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Home
              </Link>
              {/* <NavLink
                exact
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink> */}
            </div>

            <div className="formTitle">
              <h2>Register Yourself</h2>
              {/* <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink> */}
            </div>
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
             Confirm Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
          </div>
      </div>
      
    );
  }
}
export default SignUpForm;
