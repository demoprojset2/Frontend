import React,{useState} from "react";
import {Link } from "react-router-dom";
import Problem from "./Problem";
import axios from "axios";
import { toast } from "react-toastify";

const ProblemDetails = ({ problem }) => {

  const [problem_name, setProb] = useState("");
  const [status, setStatus] = useState("");
  const [severity, setSeverity] = useState("");
  const [start_date, setStart] = useState("");
  const [end_date, setEnd] = useState("");


  let handleSubmit
  try {
      handleSubmit = async (e) => {
          e.preventDefault();
          const iid = localStorage.getItem("pat_id");
          const body = {
            problem_name,
            severity,
            status,
            start_date,
            end_date:"2022-01-11"
          };
          const token = localStorage.getItem("token");
          const header = {
            Authorization: "Bearer " + token,
          };
      
          const resp = await axios.post(`/api/doctors/${iid}/problems`, body, {
            headers: header,
          });

          if(new Date(start_date) > Date.now()){
            toast("Date Invalid")
            return
          }
            window.location.reload();
            toast.success("Data Added Successfully!")
          }
      
  } catch (error) {
      toast("Some Error Occured!")
      
  }


  


  return (
    <div id="accordion" className="m-5 mb-0">
        {problem &&
          problem.map((ele,id) => {
            console.log(ele)
            // let prob = {
            //   Description: ele.problem_name,
            //   Severity: funSever(ele.severity),
            //   Status: funStat(ele.status),
            //   count:id
            // };
            
            return (
              <Problem problem={ele} id={id} />
            );
          })}
          
          <div className="modal2">
              <button
                type="button"
                className="btn btn-success btn-lg"
                data-toggle="modal"
                data-target="#exampleModalCenter2"
              >
                Add New
              </button>

              <div
                className="modal fade"
                id="exampleModalCenter2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle2"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle2">
                        Problems Details
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <form
                      className="row g-3 needs-validation mx-4 my-4"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="modal-body">
                        <div className="row g-3">
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
                              value={problem_name}
                              onChange={(e) => setProb(e.target.value)}
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
                              value={severity}
                              onChange={(e) => setSeverity(e.target.value)}
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
                              value={status}
                              onChange={(e) => setStatus(e.target.value)}
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
                              value={start_date}
                              onChange={(e) => setStart(e.target.value)}
                              required
                            />
                            <div className="valid-feedback">Looks good!</div>
                          </div>
                        
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="submit" className="btn btn-success">
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      
    </div>
  );
};

export default ProblemDetails;
