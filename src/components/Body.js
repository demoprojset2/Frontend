
// import { useState } from "react";

import React, { Component } from 'react'

export default class Body extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phoneno:"",
      gender:"",
      email:"",
      address:"",
      dob:"",
      height:null,
      weight:null,
      s_date:"",
      bp:"",
      temp:null,
      pulse:null,
      smoking_status:"",
      drinking_status:"",
      substance:"",
      verification_status:"",
      criticality:"",
      a_type:"",
      pname:"",
      severity:"",
      pstatus:"",
      startdate:"",
      enddate:"",
      additionaldetails:"",
      medic_name:"",
      dose_unit:"",
      dose_amount:"",
      dose_frequency:"",
      manufacturer:""
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
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  render() {
    return (
      <>
      <div className="mx-3" style={{backgroundColor: '#ddab7d'}}>
      <h1 className="text-center my-3">Patient Details</h1>
    <form className="row g-3 needs-validation mx-4 my-4"  onSubmit={this.handleSubmit} >
    <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom05" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom05"
          minLength="10"
          maxLength="10"
          name="phoneno"
          value={this.state.phoneno}
          onChange={this.handleChange}
          required
        />
        <div className="invalid-feedback">Please provide a Phone Number.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Gender
        </label>
        <select className="form-select"
         id="validationCustom04"
         name="gender"
         value={this.state.gender}
         onChange={this.handleChange}
          required>
          <option selected disabled value="">
            Select
          </option>
          <option value="Male">Male</option>

          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <div className="invalid-feedback">Please select a valid Gender.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustomUsername" className="form-label">
          Email
        </label>
        <div className="input-group has-validation">
          <input
            type="email"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            name="email"
         value={this.state.email}
         onChange={this.handleChange}
            required
          />
          <div className="invalid-feedback">Please choose an Email.</div>
        </div>
        </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">
          Address
        </label>
        <input
          type="text"
          name='address'
          className="form-control"
          id="validationCustom03"
          value={this.state.address}
          onChange={this.handleChange}
          required
        />
        <div className="invalid-feedback">Please provide a valid Address.</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Date of Birth
        </label>
        <input
          type="date"
          name='dob'
          value={this.state.dob}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Weight (kg)
        </label>
        <input
          type="number"
          name="weight"
          value={this.state.weight}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Height (Cm)
        </label>
        <input
          type="number"
          name='height'
          value={this.state.height}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Date Added
        </label>
        <input
          type="date"
          name="s_date"
          value={this.state.s_date}
          onChange={this.handleChange}

          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Blood Pressure
        </label>
        <input
          type="text"
          name="bp"
          value={this.state.bp}
          onChange={this.handleChange}

          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Temperature (F)
        </label>
        <input
          type="number"
          name="temp"
          value={this.state.temp}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Pulse
        </label>
        <input
          type="number"
          name="pulse"
          value={this.state.pulse}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom04" className="form-label">
        Smoking Status
        </label>
        <select className="form-select" id="validationCustom04" name='smoking_status'
        value={this.state.smoking_status} onChange={this.handleChange} required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Never smoked">Never smoked</option>

          <option value="Current Smoker">Current Smoker</option>
          <option value="Former Smoker">Former Smoker</option>
        </select>
        <div className="invalid-feedback">Please select a valid status.</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom04" className="form-label">
        Drinking Status
        </label>
        <select className="form-select" id="validationCustom04" name='drinking_status'
        value={this.state.drinking_status} onChange={this.handleChange} required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Lifetime Non-drinker">Lifetime Non-drinker</option>

          <option value="Current Drinker">Current Drinker</option>
          <option value="Former Drinker">Former Drinker</option>
        </select>
        <div className="invalid-feedback">Please select a valid status.</div>
      </div>
      
      <h1 className="text-center my-5">Allergy Details</h1>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Substance
        </label>
        <input
          type="text"
          className="form-control"
          name="substance"
          value={this.state.substance}
          onChange={this.handleChange}
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
          Verification Status
        </label>
        <select className="form-select" id="validationCustom04" 
        name="verification_status"
        value={this.state.verification_status}
        onChange={this.handleChange} required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Suspected">Suspected</option>
          <option value="Likely">Likely</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Resolved">Resolved</option>
          <option value="Refuted">Refuted</option>
        </select>
        <div className="invalid-feedback">Please select a valid Status.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
        criticality
        </label>
        <select className="form-select" id="validationCustom04" 
        name="criticality"
        value={this.state.criticality}
        onChange={this.handleChange} required>
          <option selected disabled value="">
          Low
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="invalid-feedback">Please select a valid criticality.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
        Type
        </label>
        <select className="form-select" id="validationCustom04" 
        name="a_type"
        value={this.state.a_type}
        onChange={this.handleChange} required> 
          <option selected disabled value="">
          Select
          </option>
          <option value="Allergy">Allergy</option>
          <option value="Intolerance">Intolerance</option>
        </select>
        <div className="invalid-feedback">Please select a valid Type.</div>
      </div>
      <h1 className="text-center my-5">Problem Details</h1>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Problem Name
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name="pname"
        value={this.state.pname}
        onChange={this.handleChange} 
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
        Severity
        </label>
        <select className="form-select" id="validationCustom04" 
        name="severity"
        value={this.state.severity}
        onChange={this.handleChange}  required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </select>
        <div className="invalid-feedback">Please select a valid Severity.</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom04" className="form-label">
        Status
        </label>
        <select className="form-select" id="validationCustom04"
        name="pstatus"
        value={this.state.pstatus}
        onChange={this.handleChange}  required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Active">Active</option>
          <option value="AResolved">Resolved</option>
        </select>
        <div className="invalid-feedback">Please select a valid Status.</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          className="form-control"
          id="validationCustom01"
          name="startdate"
        value={this.state.startdate}
        onChange={this.handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          End Date
        </label>
        <input
          type="date"
          className="form-control"
          id="validationCustom01"
          name="enddate"
        value={this.state.enddate}
        onChange={this.handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-8">
        <label htmlFor="validationCustom01" className="form-label">
          Additional Details
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          name="additionaldetails"
        value={this.state.additionaldetails}
        onChange={this.handleChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <h1 className="text-center my-5">Medication Details</h1>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
        Medication Name
        </label>
        <input
          type="text"
          name='medic_name'
          value={this.state.medic_name}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-3">
        <label htmlFor="validationCustom01" className="form-label">
          Manufacturer
        </label>
        <input
          type="text"
          name='manufacturer'
          value={this.state.manufacturer}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Dose Unit
        </label>
        <input
          type="text"
          name='dose_unit'
          value={this.state.dose_unit}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom01" className="form-label">
          Dose Amount
        </label>
        <input
          type="number"
          name='dose_amount'
          value={this.state.dose_amount}
          onChange={this.handleChange}
          className="form-control"
          id="validationCustom01"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-2">
        <label htmlFor="validationCustom04" className="form-label">
        Dose Frequency
        </label>
        <select className="form-select" id="validationCustom04"
        name='dose_frequency'
        value={this.state.dose_frequency}
        onChange={this.handleChange} required>
          <option selected disabled value="">
          Select
          </option>
          <option value="Per Day">Per Day</option>

          <option value="Per Half Day">Per Half Day</option>
          <option value="Per Quarter Day">Per Quarter Day</option>
        </select>
        <div className="invalid-feedback">Please select a valid Frequency.</div>
      </div>
      <div className="col-12 my-4">
        <button className="btn btn-primary" type="submit">
          Add Patient
        </button>
      </div>
    </form>
    </div>
    </>
    )
  }
}

