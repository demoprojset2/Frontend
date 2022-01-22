import React, { Component } from "react";
import "./Doctor.css";
import { useState } from "react";
import { NavLink, Link, Router, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
class DoctorDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      originalPosts: [],
      search: "",
      DataisLoaded: false,
      id: [],
      redirect: false,
      pat_id: "",
    };

    this.handle = this.handle.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    const token = localStorage.getItem("token");

    if (token == null) {
      window.location.href = "/";
    }
  }
  async componentDidMount() {
    let doctor_id = localStorage.getItem("doc_id");
    let token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };

    const res1 = await axios
      .get(`/api/doctors/${doctor_id}/getpatients`, {
        headers: header,
      })
      .catch((err) => {
        window.alert("Something goes wrong ! Please go to home page");
      });
    const posts = res1.data;
    console.log(posts);
    // posts.forEach(element => {
    this.setState({
      posts: posts,
      originalPosts: posts,
    });

    // })
  }

  handle(e) {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });

    //  const filteredPatients = this.state.posts.filter((post) => post.name.toLowerCase().includes(e.target.value.toLowerCase()));
    this.setState({
      posts: this.state.originalPosts.filter((post) =>
        post.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    });
  }
  async handleSearch(post) {
    let doctor_id = localStorage.getItem("doc_id");
    let token = localStorage.getItem("token");
    const header = {
      Authorization: "Bearer " + token,
    };
    const res2 = await axios.get(
      `/api/doctors/${doctor_id}/search/${post}`,
      {
        headers: header,
      }
    );
    console.log(res2.data[0].id);
    this.setState({
      pat_id: res2.data[0].id,
    });
    localStorage.setItem("pat_id", res2.data[0].id);

    this.setState({
      redirect: true,
    });
  }
  async handleClick(post) {
    localStorage.setItem("pat_id", post);

    window.location.href = "/editpatient";
  }

  handleEdit(post) {
    localStorage.setItem("pat_id", post);

    window.location.href = "/editdetails";
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/modals" />;
    }

    return (
      <div>
        <Navbar />

        <div className="row mr-0 new4">
          <div className="col-md-5 align-items-center new2 justify-content-center">
            <div class="col-12 col-md-10 col-lg-12 new">
              <form class="card card-sm mr-2 mb-2">
                <div class="card-body row no-gutters align-items-center">
                  <div class="col mr-0 ml-2">
                    <input
                      class="form-control form-control-lg form-control-borderless text-dark"
                      type="search"
                      placeholder="Search patients by name"
                      onChange={this.handle}
                    ></input>
                  </div>
                  {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                  <div class="col-auto">
                    <button
                      class="btn btn-lg btn-light ml-0 fas fa-search pt-3 pb-3"
                      onClick={this.handle}
                      disabled
                    ></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 p-0 mt-3 new3">
            {this.state.posts.map((post, index) => (
              <div class="job-box d-md-flex justify-content-between mb-20 card-5 p-2 rounded-lg">
                <div class="job-left my-4 d-md-flex align-items-center pl-4">
                  <div class="img-holder  mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                    {post.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div class="job-content">
                    <h5 class="text-center text-md-left">
                      {post.name.toUpperCase()}
                    </h5>
                    <ul class="d-md-flex text-capitalize ff-open-sans">
                      <li class="mr-md-6">
                        <i class="zmdi zmdi-pin mr-2"></i> {post.email_id}
                      </li>
                      <li class="mr-md-2">
                        <i class="zmdi zmdi-money mr-2 pl-2"></i>{" "}
                        {post.phone_number}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="job-right my-4 flex-shrink-0">
                  <div class="job-content right-col col-lg-1 d-flex align-items-center icons pl-5">
                    {/* <div class="">
                        <i
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleSearch(post.name)}
                          className=" mr-3 fa fa-plus text-secondary "
                        ></i>
                      </div> */}
                    <div class="">
                      <i
                        style={{ cursor: "pointer", fontSize: "2rem" }}
                        onClick={() => this.handleClick(post.id)}
                        className="  mr-3 fas fa-arrow-right text-info"
                      ></i>
                    </div>
                    {/* <div class="">
                        <i
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleEdit(post.id)}
                          className="fas fa-user-edit text-danger"
                        ></i>
                      </div> */}
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="modal1">
              <button
                type="button"
                className="btn"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <i
                  style={{ cursor: "pointer" }}
                  className="fa-regular fa-message"
                ></i>
              </button>

              <div
                className="modal fade"
                id="exampleModalCenter"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">
                        Your Message
                      </h5>
                    </div>
                    <form className="row needs-validation mx-4 my-4">
                      <div className="modal-body">
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
                          id="validationCustom01"
                          required
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div> */}



          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DoctorDashboard;
