import React,{useState} from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import { toast } from "react-toastify";
import Prescription from "./Prescription";

const EditPrescription = ({ all }) => {

  const [medication_name, setMedication] = useState("");
  const [medication_manufacturer, setManufacturer] = useState("");
  const [dose_amount, setAmount] = useState("");
  const [dose_timing, setTiming] = useState("");
  const [dose_description, setDescription] = useState("");

  let handleSubmit;
  try {
    handleSubmit = async (e) => {
      e.preventDefault();
      const iid = localStorage.getItem("pat_id");
      const body = {
        medication_name,
        medication_manufacturer,
        expire:null,
        amount:null,
      };
      const dose = {
        dose_amount,
        dose_timing,
        dose_description
      };
      const token = localStorage.getItem("token");
      const header = {
        Authorization: "Bearer " + token,
      };

      const resp1 = await axios.post(`/api/patients/${iid}/meds`,body, {
        headers: header,
      });
      const med_id =resp1.data.id

      const res2 = await axios.post(
        `http://127.0.0.1:8000/api/patients/medications/${med_id}/dose`,
        dose,
        {
          headers: header,
        }
      );

      window.location.reload();
      toast.success("Data Added Successfully")
    };
  } catch (error) {
    toast("Some Error Occured!");
  }
  

  return (
    <div id="accordion" className="m-5 mb-0">
        {all &&
          all.map((ele,id) => {
            console.log(ele)
            
            return (
              <Prescription all={ele} id={id} />
            );
          })}
          
          <div className="modal3">
              <div>
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  data-toggle="modal"
                  data-target="#exampleModalCenter3"
                >
                  Add New
                </button>

                <div
                  className="modal fade"
                  id="exampleModalCenter3"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle3"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="exampleModalCenterTitle3"
                        >
                          Prescription Details
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
                                Medication Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                name="medic_name"
                                value={medication_name}
                                onChange={(e) => setMedication(e.target.value)}
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
                                value={medication_manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
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
                                value={dose_amount}
                                onChange={(e) => setAmount(e.target.value)}
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
                                value={dose_timing}
                                onChange={(e) => setTiming(e.target.value)}
                                required
                              >
                                <option selected disabled value="">
                                  Select
                                </option>
                                <option value="Per Half Day">
                                  Per Half Day
                                </option>

                                <option value="Per Day">Per Day</option>
                                <option value="Per Quarter Hour">
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
                                value={dose_description}
                                onChange={(e) => setDescription(e.target.value)}
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
      
    </div>
  );
};

export default EditPrescription;
