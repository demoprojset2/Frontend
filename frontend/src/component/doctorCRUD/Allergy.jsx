import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Allergy = ({ allergy, id }) => {
    let handleSubmit
    try {
        handleSubmit = async (e, id) => {
            e.preventDefault();
            const iid = localStorage.getItem("pat_id");
            const body = {
                substance: allergy.substance,
                verification_status,
                criticality,
                type,
            };
            const token = localStorage.getItem("token");
            const header = {
              Authorization: "Bearer " + token,
            };
        
            const resp = await axios.patch(`/api/patient/${iid}/allergy/${id}`, body, {
              headers: header,
            });
            toast.success("Data Updated")
        
            }
            
        
    } catch (error) {
        toast("Some Error Occured!");
    }


    const handleDelete = async (e, id) => {
        e.preventDefault();
        const iid = localStorage.getItem("pat_id");
        const token = localStorage.getItem("token");
        const header = {
          Authorization: "Bearer " + token,
        };
    
        const resp = await axios.delete(`/api/patient/${iid}/allergy/${id}`, {
          headers: header,
        });
        window.location.reload();

    
    

    
  };
  const [type, setType] = useState(allergy.type);
  const [verification_status, setStatus] = useState(allergy.verification_status);
  const [criticality, setCritic] = useState(allergy.criticality)

  return (
     
    <div className="card mb-2">
      <div class="card-header d-flex flex-row justify-content-between" id="heading">
        <h4 class="mb-0"> {allergy.substance}</h4>
        <div>
        <button
          class="btn btn-link collapsed text-dark"
          data-toggle="collapse"
          data-target={"#collapse" + id}
          aria-expanded="true"
          aria-controls="collapse"
        >
          <i class="fas fa-chevron-circle-down"></i>
        </button>
        <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(e, allergy.id) } }><i class="fas fa-trash"></i></button>
        </div>
      </div>
      
      <div
        id={"collapse" + id}
        class="collapse"
        aria-labelledby="heading"
        data-parent="#accordion"
      >
        <div class="card-body">
          <form
            className="row g-3 needs-validation mx-4 my-4"
            onSubmit={(e) => handleSubmit(e, allergy.id)}
          >
            <div className="row">
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
                  Type
                </label>
                <select
                  className="form-select mb-2"
                  id="validationCustom04"
                  name="type"
                  //   value={problem.severity}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    select
                  </option>
                  <option selected={type==="1"} value="1">Active</option>
                  <option selected={type==="2"} value="2">Intolerance</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid status.
                </div>
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
                  Criticality
                </label>
                <select
                  className="form-select mb-2"
                  id="validationCustom04"
                  name="criticality"
                  //   value={funStat(problem.status)}
                  onChange={(e) => {
                    setCritic(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option selected={criticality === "1"} value='1'>
                    Low
                  </option>
                  <option selected={criticality === "2"} value='2'>
                    Medium
                  </option>
                  <option selected={criticality === "3"} value='3'>
                    High
                  </option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid status.
                </div>
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
                  Status
                </label>
                <select
                  className="form-select mb-2"
                  id="validationCustom04"
                  name="verification_status"
                  //   value={funStat(problem.status)}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option selected={verification_status === "1"} value='1'>
                    Suspected
                  </option>
                  <option selected={verification_status === "2"} value='2'>
                    Likely
                  </option>
                  <option selected={verification_status === "3"} value='3'>
                    Confirmed
                  </option>
                  <option selected={verification_status === "4"} value='4'>
                    Resolved
                  </option>
                  <option selected={verification_status === "5"} value='5'>
                    Refuted
                  </option>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Allergy;
