import React, { Component } from "react";
// import Navbar from "./Navbar";
import { toast, ToastContainer } from "react-toastify";
import Collapse from "../patient/Collapse";
import Table from "../patient/Table";
import axios from "axios";
import moment from "moment";
import validator from 'validator'

class PatientDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone_number: "",
      gender: "",
      email: "",
      address: "",
      dob: "",
      height: null,
      weight: null,
      s_date: "",
      bp: "",
      bp2: "80",
      temp: null,
      pulse: null,
      smoking_status: "",
      drinking_status: "",
      login: false,
      show: false,
      doc_id: "",
      err: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    const token = localStorage.getItem("token");
    if (token == null) {
      window.alert("Please log in !");
      window.location.href = "/";
    }
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    const pat_id = localStorage.getItem("pat_id");
    const header = {
      Authorization: "Bearer " + token,
    };

    const res1 = await axios.get(`/api/patients/${pat_id}/details`, {
      headers: header,
    });
    console.log(res1.data);
    this.setState({
      name: res1.data.name,
      dob: res1.data.dob,
      gender: res1.data.gender,
      email: res1.data.email_id,
      address: res1.data.address,
      phone_number: res1.data.phone_number,
    });

    const res2 = await axios.get(`/api/patients/${pat_id}/vitaldetails`, {
      headers: header,
    });
    console.log(res2.data);
    this.setState({
      weight: res2.data.weight,
      height: res2.data.height,
      pulse: res2.data.pulse,
      bp: res2.data.blood_pressure,
      s_date: res2.data.date_added,
      temp: res2.data.temperature,
    });

    const res3 = await axios.get(`/api/patient/${pat_id}/social`, {
      headers: header,
    });
    console.log(res3);
    this.setState({
      smoking_status: res3.data.tobacco,
      drinking_status: res3.data.alcohol,
    });
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  async handleSubmit(event) {
    event.preventDefault()
    // console.log(new Date(this.state.dob),Date.now())
    if(new Date(this.state.dob) > Date.now()){
      toast("Date of Birth Invalid")
      return
    }

    var re = /^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/;

    if(!re.test(this.state.phone_number)){
      toast("Invalid Phone No.")
      return
    }



    event.preventDefault();
    this.setState({
      checkSubmit: true,
      show: true,
    });

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const doc_id = localStorage.getItem("doc_id");
    const token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };

 

    const general = {
      name: this.state.name,
      dob: this.state.dob,
      gender: this.state.gender,
      email_id: this.state.email,
      address: this.state.address,
      phone_number: this.state.phone_number,
    };

    const vitail = {
      weight: this.state.weight,
      height: this.state.height,
      blood_pressure: parseFloat(this.state.bp),
      pulse: this.state.pulse,
      date_added: this.state.s_date,
      temperature: this.state.temp,
    };

    const social = {
      tobacco: this.state.smoking_status,
      alcohol: this.state.drinking_status,
    };

    const pat_id = localStorage.getItem("pat_id");

    const res1 = await axios.put(`/api/patients/${pat_id}/details`, general, {
      headers: header,
    });

    const res2 = await axios.post(
      `/api/patients/${pat_id}/vitaldetails`,
      vitail,
      {
        headers: header,
      }
    );
    console.log(res2);

    const res3 = await axios.post(
      `/api/doctors/${pat_id}/socialhistory`,
      social,
      {
        headers: header,
      }
    );
    console.log(res3);

    toast.success("Data Updated Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <div
          className="d-flex flex-column justify-content-evenly align-items-center"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <form
              className="row g-3 needs-validation mx-4 my-4"
              onSubmit={this.handleSubmit}
              // style={{ minHeight: "84vh" }}
            >
              <h1
                className="text-center my-3 "
                style={{ fontWeight: "bolder", color: "#040914" }}
              >
                General Details
              </h1>
              <div className="row g-3 border">
                <div className="col-lg-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-lg-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom04"
                    className="form-label"
                  >
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="1">Male</option>

                    <option value="2">Female</option>
                    <option value="3">Others</option>
                  </select>
                  {/* <div className="invalid-feedback">
                  Please select a valid status.
                </div> */}
                </div>

                <div className="col-lg-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    max={moment().toDate()}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-lg-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-lg-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-lg-4 pb-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    value={this.state.phone_number}
                    onChange={this.handleChange}
                    min={1}
                    max={10}
                    className="form-control"
                    id="validationCu1"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
              </div>

              {/* <div className="col-3 my-4">
                <button
                  className="btn btn-success"
                  style={{ fontWeight: "bolder" }}
                  type="submit"
                >
                  Update Patient
                </button>
              </div> */}
            {/* </form>
          </div>

          <div>
            <form
              className="row g-3 needs-validation mx-4 my-4"
              onSubmit={this.handleSubmit}
              style={{ minHeight: "84vh" }}
            > */}
              <h1
                className="text-center"
                style={{ fontWeight: "bolder", color: "#040914" }}
              >
                Vital Details
              </h1>
              <div className="row g-3 border">
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
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
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Height (Cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                    className="form-control"
                    min={1}
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    BP(systolic)
                  </label>
                  <input
                    type="number"
                    name="bp"
                    min={1}
                    max={300}
                    value={this.state.bp}
                    onChange={this.handleChange}
                    placeholder="mmHg"
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    BP(diastolic)
                  </label>
                  <input
                    type="number"
                    name="bp2"
                    value={this.state.bp2}
                    min={1}
                    max={300}
                    placeholder="mmHg"
                    className="form-control"
                    id="validationCu1"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Temperature (F)
                  </label>
                  <input
                    type="number"
                    name="temp"
                    value={this.state.temp}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    min={80}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom01"
                    className="form-label"
                  >
                    Pulse
                  </label>
                  <input
                    type="number"
                    name="pulse"
                    value={this.state.pulse}
                    onChange={this.handleChange}
                    className="form-control"
                    id="validationCustom01"
                    placeholder="bpm"
                    min={50}
                    max={220}
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-3">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom04"
                    className="form-label"
                  >
                    Smoking Status
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    name="smoking_status"
                    value={this.state.smoking_status}
                    onChange={this.handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="1">Never smoked</option>

                    <option value="2">Current Smoker</option>
                    <option value="3">Former Smoker</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid status.
                  </div>
                </div>
                <div className="col-md-3 pb-4">
                  <label
                    style={{
                      fontSize: "20px",
                      fontWeight: "bolder",
                      color: "#040914",
                    }}
                    htmlFor="validationCustom04"
                    className="form-label"
                  >
                    Drinking Status
                  </label>
                  <select
                    className="form-select"
                    id="validationCustom04"
                    name="drinking_status"
                    value={this.state.drinking_status}
                    onChange={this.handleChange}
                    required
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value="3">Lifetime Non-drinker</option>

                    <option value="1">Current Drinker</option>
                    <option value="2">Former Drinker</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid status.
                  </div>
                </div>
              </div>
              <div className="col-3 my-4">
                <button
                  className="btn btn-success"
                  style={{ fontWeight: "bolder" }}
                  type="submit"
                >
                  Update Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PatientDetails;

// const PatientsDetails = ({ patient, vitals, social, allergy, problem }) => {

//   const allergyKeys = ["Type","Substance","Criticality","Status"]
//   const problemKeys = ["Description","Severity","Status"]

//   console.log(allergy,problem)
//   return (
//     <div>
//       <section class="background1 mt-5 ">
//         <div id="accordion" className="mr-5 ml-5">
//           <Collapse data={patient} title="General Details" count="One" />
//           <Collapse data={vitals} title="Vital Details" count="Two" />
//           <Collapse data={social} title="Social Details" count="Three" />
//           <Table data={allergy} keys={allergyKeys} title="Allergies" count="Four" />
//           <Table data={problem} keys={problemKeys} title="Problem Details" count="Five" />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PatientsDetails;

{
  /* <div class="row card-container">
                <div class="col-lg-4 card-container-container ">
                  <div class="card text-center w-75">
                    <Card data={patient} title="General Details" />
                  </div>
                </div>
                <div class="col-lg-4 card-container-container ">
                  <div class="card card1 text-center w-75">
                    <Card data={vitals} title="Vital Details" />
                  </div>
                </div>
                <div class="col-lg-4 card-container-container ">
                  <div class="card card1 text-center w-75">
                    <Card data={social} title="Social" />
                  </div>
                </div>
              </div> */
}
