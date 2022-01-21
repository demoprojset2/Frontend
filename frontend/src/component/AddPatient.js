import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import './addpat.css'

import PatientLogin from './Patientlogin';
import Navbar from './Navbar';
import { toast, ToastContainer } from 'react-toastify';
class AddPatient extends Component {
  constructor() {
    super();
    // this.setState({
    //   doc_id:doc_id
    // })
    this.state = {
      name: "",
      phoneno: "",
      gender: "",
      email: "",
      address: "",
      dob: "",
      height: null,
      weight: null,
      s_date: "",
      bp: "",
      temp: null,
      pulse: null,
      smoking_status: "",
      drinking_status: "",
      login: false,
      show: false,
      doc_id: "",
      err: false

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const token = localStorage.getItem("token");
    if (token == null) {
      window.alert("Please log in !")
      window.location.href = "/"
    }


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

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      checkSubmit: true,
    })

    if(new Date(this.state.dob) > Date.now()){
      toast("Date of Birth Invalid")
      return
    }

    console.log("The form was submitted with the following data:");
    console.log(this.state.doc_id, "doc");
    const doc_id = localStorage.getItem("doc_id");
    const token = localStorage.getItem("token");
    console.log("+91" + this.state.phoneno);
    const header = {
      "Authorization": "Bearer " + token
    }
    const post = {
      name: this.state.name,
      email_id: this.state.email,
      address: this.state.address,
      dob: this.state.dob,
      gender: this.state.gender,
      phone_number: "+91" + this.state.phoneno
    }

    const vitail = {
      weight: this.state.weight,
      height: this.state.height,
      blood_pressure: parseFloat(this.state.bp),
      pulse: this.state.pulse,
      date_added: this.state.s_date,
      temperature: this.state.temp
    }

    const social = {
      tobacco: this.state.smoking_status,
      alcohol: this.state.drinking_status
    }
    
    let res1
    try {
      res1 = await axios.post(`api/doctors/${doc_id}/addpatient`, post, {
        headers: header
      })  
    } 
    catch(err) {
      console.log(err.response);
      this.setState({
        err: true

      })
      toast.error(err.response.data.email_id[0])
      // window.alert("Incorrect details")
    }

    if (!this.state.err) {

      console.log(res1)
      localStorage.setItem("pat_id", res1.data.id)
      const pat_id = localStorage.getItem("pat_id")
      const res2 = await axios.post(`api/patients/${pat_id}/vitaldetails`, vitail, {
        headers: header
      })
      console.log(res2);

      const res3 = await axios.post(`api/doctors/${pat_id}/socialhistory`, social, {
        headers: header

      })
      console.log(res3);
      this.setState({
        show: true
      })
      toast.success("Patient details added.Click next to add details")


    }




  }



  render() {

    return (
      <div>
        <ToastContainer />
        <Navbar />
        <div className="d-flex justify-content-around my-4 mt-5 mb-3" style={{ width: "100%" }}>

          <div><h1 className="center">Add Patient Details</h1></div>

        </div>

        <form className="row g-3 needs-validation m-0 p-0" onSubmit={this.handleSubmit}  >
          <div className="d-flex mx-2 nn justify-content-center" style={{ width: "95%" }}  >

            <div className="container shadow-lg ro1  py-3" style={{ width: "30rem", backgroundColor: "#A2D2FF" }}>
              <div className="row g-3" >
                <div className="col-md-6 "  >
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914" }} htmlFor="validationCustom01" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"


                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6 ">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914" }} htmlFor="validationCustom05" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom05"
                    value={this.state.phoneno}
                    onChange={this.handleChange}
                    minLength="10"
                    maxLength="10"
                    name="phoneno"

                    required
                  />
                  <div className="invalid-feedback">Please provide a Phone Number.</div>
                </div>
                <div className="col-md-6 ">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom04" className="form-label">
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
                    <option value="M">Male</option>

                    <option value="F">Female</option>
                    <option value="T">Others</option>
                  </select>
                  <div className="invalid-feedback">Please select a valid Gender.</div>
                </div>
                <div className="col-md-6 ">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustomUsername" className="form-label">
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
                <div className="col-md-12 ">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom03" className="form-label">
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
                <div className="col-md-6 ">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom01" className="form-label">
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
              </div>
            </div>
            <div className="container shadow-lg ro2 py-3 btom" style={{ width: "30rem", backgroundColor: "#A2D2FF" }}>
              <div className="row g-3" >
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914" }} htmlFor="validationCustom01" className="form-label">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    min={1}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914" }} htmlFor="validationCustom01" className="form-label">
                    Height (Cm)
                  </label>
                  <input
                    type="number"
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                    className="form-control"
                    min={1}
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom01" className="form-label">
                    BP(systolic)
                  </label>
                  <input
                    type="number"
                    name="bp"
                    min={1}
                    max={300}
                    value={this.state.bp}
                    onChange={this.handleChange}
                    placeholder='mmHg'
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom01" className="form-label">
                    BP(diastolic)
                  </label>
                  <input
                    type="number"
                    name="bp2"
                    min={1}
                    max={300}

                    placeholder='mmHg'
                    className="form-control"
                    id="validationCu1"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom01" className="form-label">
                    Temperature (F)
                  </label>
                  <input
                    type="number"
                    name="temp"
                    value={this.state.temp}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    min={92}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom01" className="form-label">
                    Pulse
                  </label>
                  <input
                    type="number"
                    name="pulse"
                    value={this.state.pulse}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    placeholder='bpm'
                    min={50}
                    max={220}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom04" className="form-label">
                    Smoking Status
                  </label>
                  <select className="form-select" id="validationCustom04" name='smoking_status'
                    value={this.state.smoking_status} onChange={this.handleChange}
                    required>
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="1">Never smoked</option>

                    <option value="2">Current Smoker</option>
                    <option value="3">Former Smoker</option>
                  </select>
                  <div className="invalid-feedback">Please select a valid status.</div>
                </div>
                <div className="col-md-6">
                  <label style={{ fontSize: "20px", fontWeight: "normal", color: "#040914", marginTop: "0.5rem" }} htmlFor="validationCustom04" className="form-label">
                    Drinking Status
                  </label>
                  <select className="form-select" id="validationCustom04" name='drinking_status'
                    value={this.state.drinking_status} onChange={this.handleChange}
                    required>
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="3">Lifetime Non-drinker</option>

                    <option value="1">Current Drinker</option>
                    <option value="2">Former Drinker</option>
                  </select>
                  <div className="invalid-feedback">Please select a valid status.</div>
                </div>

              </div>
            </div>



          </div >
          <div className="d-flex justify-content-evenly foot">
            <div>
              <button className="btn btn-lg btn-dark mb-2" style={{ fontWeight: "bold"}} type="submit">
                Add Patient
              </button>
            </div>
            {this.state.show ?
              <div>
                <Link to="/modals" className="col-4 my-4" >
                  <button className="btn btn-dark btn-lg" type='submit' style={{ fontWeight: "bold" }} >
                    Next
                  </button>
                  
                </Link> 
                
                </div>
               : null }
          </div>
        </form >

      </div>
    )
  }
}

export default AddPatient;