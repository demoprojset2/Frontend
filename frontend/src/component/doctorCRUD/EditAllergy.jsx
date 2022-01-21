import React, { useState } from "react";
import { Link } from "react-router-dom";
import Allergy from "./Allergy";
import axios from "axios";
import { toast } from "react-toastify";

const EditAllergy = ({ allergy }) => {
  const [substance, setSubstance] = useState("");
  const [verification_status, setStatus] = useState("");
  const [criticality, setCriticality] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");

  let handleSubmit;
  try {
    handleSubmit = async (e) => {
      e.preventDefault();
      const iid = localStorage.getItem("pat_id");
      const body = {
        substance,
        verification_status,
        criticality,
        type,
        comment,
      };
      const token = localStorage.getItem("token");
      const header = {
        Authorization: "Bearer " + token,
      };

      const resp = await axios.post(`/api/patients/${iid}/allergy`, body, {
        headers: header,
      });
      window.location.reload();
      toast.success("Data Added Successfully!");
    };
  } catch (error) {
    toast("Some Error Occured!");
  }

  return (
    <div id="accordion" className="m-5 mb-0">
      {allergy &&
        allergy.map((ele, id) => {
          console.log(ele);

          return <Allergy allergy={ele} id={id} />;
        })}

      <div className="modal1">
        <button
          type="button"
          className="btn btn-success btn-lg"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Add New
        </button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Allergy Details
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
                        Substance
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="substance"
                        value={substance}
                        onChange={(e) => setSubstance(e.target.value)}
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
                        value={verification_status}
                        onChange={(e) => setStatus(e.target.value)}
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
                        value={criticality}
                        onChange={(e) => setCriticality(e.target.value)}
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
                        name="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
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
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        id="validationCustom01"
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

export default EditAllergy;
