import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Prescription = ({ all, id }) => {
    let handleSubmit
    try {
        handleSubmit = async (e, id) => {
            console.log(id)
            e.preventDefault();
            // const iid = localStorage.getItem("pat_id");
            const body = {
                medication:all.Id,
                dose_amount,
                dose_timing,dose_description
            };
            const token = localStorage.getItem("token");
            const header = {
              Authorization: "Bearer " + token,
            };
        
            const resp = await axios.patch(`api/patients/medications/${id}/dose`, body, {
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
    
        
        const resp2= await axios.delete(`api/patients/medications/${id}/dose`, {
          headers: header,
        });
        const resp1 = await axios.delete(`api/patients/${iid}/${id}`, {
          headers: header,
        });
        window.location.reload();

    
    

    
  };
  const [dose_amount, setAmount] = useState(all.Amount);
  const [dose_timing, setTiming] = useState(all.Timing);
  const [dose_description, setDescription] = useState(all.Description)

  return (
     
    <div className="card mb-2">
      <div class="card-header d-flex flex-row justify-content-between" id="heading">
        <h4 class="mb-0"> {all.Medicine}</h4>
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
        <button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(e, all.id) } }><i class="fas fa-trash"></i></button>
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
            onSubmit={(e) => handleSubmit(e, all.id)}
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
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={dose_description}
                onChange={(e) => 
                    setDescription(e.target.value)
                }
                  className="form-control"
                  id="validationCustom01"
                  required
                />
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
                  Amount
                </label>
                <input
                  type="number"
                  name="Amount"
                  value={dose_amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                }}
                  className="form-control"
                  id="validationCustom01"
                  required
                />
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
                  Timing
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  name="timing"
                  value={dose_timing}
                  onChange={(e) => {
                    setTiming(e.target.value);
                  }}
                  required
                >
                  <option disabled value="">
                    select
                  </option>
                  <option selected={dose_timing==="Per Half Day"} value="Per Half Day">Per Half Day</option>
                  <option selected={dose_timing==="Per Day"} value="Per Day">Per Day</option>
                  <option selected={dose_timing==="Per Quarter Hour"} value="per Quarter Hour">Per Quarter Hour</option>
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

export default Prescription;
