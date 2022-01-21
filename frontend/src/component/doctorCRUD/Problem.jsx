import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Problem = ({ problem, id }) => {
    let handleSubmit
    try {
        handleSubmit = async (e, id) => {
            e.preventDefault();
            const iid = localStorage.getItem("pat_id");
            const body = {
              severity,
              problem_name: problem.problem_name,
              status,
              start_date: problem.start_date,
            };
            const token = localStorage.getItem("token");
            const header = {
              Authorization: "Bearer " + token,
            };
        
            const resp = await axios.patch(`/api/doctors/${iid}/problems/${id}`, body, {
              headers: header,
            });
                toast.success("Data Updated Successfully!")
            }
        
    } catch (error) {
        toast("Some Error Occured!")
        
    }
  

    const handleDelete = async (e, id) => {
        e.preventDefault();
        const iid = localStorage.getItem("pat_id");
        const token = localStorage.getItem("token");
        const header = {
          Authorization: "Bearer " + token,
        };
    
        const resp = await axios.delete(`/api/doctors/${iid}/problems/${id}`, {
          headers: header,
        });
        window.location.reload();

    
    

    
  };
  const [severity, setSeverity] = useState(problem.severity);
  const [status, setStatus] = useState(problem.status);

  return (
    <div className="card mb-2">
      <div class="card-header d-flex flex-row justify-content-between" id="heading">
        <h4 class="mb-0"> {problem.problem_name}</h4>
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
        <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(e, problem.id) } }><i class="fas fa-trash"></i></button>
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
            onSubmit={(e) => handleSubmit(e, problem.id)}
          >
            <div className="row">
              <div className="col-md-6">
                <label
                  style={{
                    fontSize: "20px",
                    fontWeight: "bolder",
                    color: "#040914",
                  }}
                  htmlFor="validationCustom04"
                  className="form-label"
                >
                  Severity
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  name="Severity"
                  //   value={problem.severity}
                  onChange={(e) => {
                    setSeverity(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    select
                  </option>
                  <option selected={severity==="1"} value="1">Mild</option>

                  <option selected={severity==="2"} value="2">Moderate</option>
                  <option selected={severity==="3"} value="3">Sever</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid status.
                </div>
              </div>

              <div className="col-md-6">
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
                  className="form-select"
                  id="validationCustom04"
                  name="Status"
                  //   value={funStat(problem.status)}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option selected={status === "A"} value='A'>
                    Active
                  </option>
                  <option selected={status === "R"} value='R'>
                    Resolved
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

export default Problem;
