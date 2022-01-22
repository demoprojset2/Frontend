import React, { Component } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import "./AddDetail.css";

import { Link } from "react-router-dom";

export default class AddDetails extends Component {
  constructor() {
    super();

    this.state = {
      substance: "",
      verification_status: "",
      criticality: "",
      a_type: "",
      pname: "",
      severity: "",
      pstatus: "",
      startdate: "",
      enddate: "2022-01-11",
      additionaldetails: "",
      medic_name: "",
      dose_unit: "",
      dose_amount: null,
      dose_frequency: "",
      manufacturer: "",
      dose_desc: "",
      med_id: null,
      amount: null,
      pat_name: "",
      spinner:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleallergySubmit = this.handleallergySubmit.bind(this);
    this.handleproblemSubmit = this.handleproblemSubmit.bind(this);
    this.handlemedicalSubmit = this.handlemedicalSubmit.bind(this);

    const token = localStorage.getItem("token");
    if (token == null) {
      window.alert("Please log in !");
      window.location.href = "/";
    }
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

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      checkSubmit: true,
    });
    console.log("The form was submitted with the following data:");
    console.log(this.state);

    // window.location.reload();
  }
  async componentDidMount() {
    let pat_id = localStorage.getItem("pat_id");
    let token = localStorage.getItem("token");

    const header = {
      Authorization: "Bearer " + token,
    };

    const res1 = await axios.get(
      `/api/patients/${pat_id}/details`,
      {
        headers: header,
      }
    );
    const postt = res1.data;
    this.setState({
      pat_name: postt.name,
    });
  }
  handleallergySubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const pat_id = localStorage.getItem("pat_id");
    const token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };
    const post = {
      substance: this.state.substance,
      verification_status: this.state.verification_status,
      criticality: this.state.criticality,
      type: this.state.a_type,
      comment: this.state.comment,
    };
    axios
      .post(`/api/patients/${pat_id}/allergy`, post, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
        toast.success("Allergy details successfully added");
        this.setState({
          spinner:true
        })
        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
    //

    // window.location.reload();
  }
  handleproblemSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const pat_id = localStorage.getItem("pat_id");
    const token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };
    //
    const post2 = {
      problem_name: this.state.pname,
      severity: this.state.severity,
      status: this.state.pstatus,
      start_date: this.state.startdate,
      end_date: this.state.enddate,
    };
    axios
      .post(`/api/doctors/${pat_id}/problems`, post2, {
        headers: header,
      })
      .then((res) => {
        console.log(res);
        toast.success("Patient problem successfully added");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error("Something went wrong! Sorry");
      });
    //
  }
  async handlemedicalSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const pat_id = localStorage.getItem("pat_id");
    const token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };
    //
    const post = {
      medication_name: this.state.medic_name,
      medication_manufacturer: this.state.manufacturer,
      expire: this.state.expiredate,
      amount: this.state.amount,
    };
    const dose = {
      dose_amount: this.state.dose_amount,
      dose_timing: this.state.dose_frequency,
      dose_description: this.state.dose_desc,
    };
    const res1 = await axios.post(
      `/api/patients/${pat_id}/meds`,
      post,
      {
        headers: header,
      }
    );
    console.log(res1.data);
    this.setState({
      med_id: res1.data.id,
    });

 axios.post(
      `/api/patients/medications/${this.state.med_id}/dose`,
      dose,
      {
        headers: header,
      }
    ).then(res => {
      toast.success("Patient Medications successfully added");
        setTimeout(() => {
          window.location.reload();
        }, 1500);

    })
    

    // window.location.reload();
  }

  render() {
    return (
      <div>
        <ToastContainer />
        <Navbar />
        <div
          className="d-flex justify-content-evenly align-items-center"
          style={{ height: "15vh" }}
        >
          <Link
            to="/editpatient"
            className="new btn-lg btn-dark rounded pr-5 pl-5 pt-2 pb-2 text-white font-weight-bold"
          >
            {this.state.pat_name.toUpperCase()}
            <i className="fas fa-arrow-right pl-2"></i>
          </Link>
        </div>
        <section id="tabs" className="project-tab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Allergy Details
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Problem Details{" "}
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Medication Details
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <form
                      className="row g-3 needs-validation mx-4 my-4"
                      onSubmit={this.handleallergySubmit}
                    >
                      <div className="">
                        <div
                          className="row g-3 p-4 mm shadow-lg"
                          style={{ backgroundColor: "#A2D2FF" }}
                        >
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
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
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              Verification Status
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="verification_status"
                              value={this.state.verification_status}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Select
                              </option>
                              <option value="1">Suspected</option>
                              <option value="2">Likely</option>
                              <option value="3">Confirmed</option>
                              <option value="4">Resolved</option>
                              <option value="5">Refuted</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid Status.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              criticality
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="criticality"
                              value={this.state.criticality}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Low
                              </option>
                              <option value="1">Low</option>
                              <option value="2">Medium</option>
                              <option value="3">High</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid criticality.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              Type
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="a_type"
                              value={this.state.a_type}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Select
                              </option>
                              <option value="1">Allergy</option>
                              <option value="2">Intolerance</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid Type.
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
                              Comment
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="comment"
                              value={this.state.comment}
                              onChange={this.handleChange}
                              id="validationCustom01"
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          className="btn fw-bold"
                          style={{
                            backgroundColor: "#6998AB",
                            color: "white",
                          }}
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <form
                      className="row g-3 needs-validation mx-4 my-4"
                      onSubmit={this.handleproblemSubmit}
                    >
                      <div className="">
                        <div
                          className="row g-3 p-4 mm shadow-lg"
                          style={{ backgroundColor: "#A2D2FF" }}
                        >
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
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
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              Severity
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="severity"
                              value={this.state.severity}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Select
                              </option>
                              <option value="1">Mild</option>
                              <option value="2">Moderate</option>
                              <option value="3">Severe</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid Severity.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              Status
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="pstatus"
                              value={this.state.pstatus}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Select
                              </option>
                              <option value="A">Active</option>
                              <option value="R">Resolved</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid Status.
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
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
                          {/* <div className="col-md-6">
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
        />
        <div className="valid-feedback">Looks good!</div>
      </div> */}
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          className="btn  fw-bold"
                          style={{
                            backgroundColor: "#6998AB",
                            color: "white",
                          }}
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <form
                      className="row g-3 needs-validation mx-4 my-4"
                      onSubmit={this.handlemedicalSubmit}
                    >
                      <div className="">
                        <div
                          className="row g-3 p-4 mm shadow-lg"
                          style={{ backgroundColor: "#A2D2FF" }}
                        >
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
                              Medication Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              name="medic_name"
                              value={this.state.medic_name}
                              onChange={this.handleChange}
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
                              Manufacturer
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              name="manufacturer"
                              value={this.state.manufacturer}
                              onChange={this.handleChange}
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
                              Dose Amount
                            </label>
                            <input
                              type="number"
                              name="dose_amount"
                              min={1}
                              value={this.state.dose_amount}
                              onChange={this.handleChange}
                              className="form-control"
                              id="validationCustom01"
                              required
                            />

                            <div className="valid-feedback">Looks good!</div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="validationCustom04"
                              className="form-label"
                            >
                              Dose Frequency
                            </label>
                            <select
                              className="form-select"
                              id="validationCustom04"
                              name="dose_frequency"
                              value={this.state.dose_frequency}
                              onChange={this.handleChange}
                              required
                            >
                              <option selected disabled value="">
                                Select
                              </option>
                              <option value="Per Half Day">Per Half Day</option>

                              <option value="Per Day">Per Day</option>
                              <option value="Per Quater Hour">
                                Per Quarter Hour
                              </option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid Data.
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="validationCustom01"
                              className="form-label"
                            >
                              Dose Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustom01"
                              name="dose_desc"
                              value={this.state.dose_desc}
                              onChange={this.handleChange}
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="submit"
                          className="btn fw-bold"
                          style={{
                            backgroundColor:"#6998AB",
                            color: "white",
                          }}
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}