import React, { useState } from "react";
import "../Dasboard.css";
import Collapse from "./Collapse";
import Table from "./Table";
import { useParams } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const PatientsDetails = ({ patient, vitals, social, allergy, problem }) => {
  const allergyKeys = ["Type", "Substance", "Criticality", "Status"];
  const problemKeys = ["Description", "Severity", "Status"];
  const [comment, setComment] = useState("");
  const params = useParams();
  const id = params.id;

  let handleSubmit;
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`/api/patient/${id}/comments`, {
        comment: comment,
      });
      toast("Message Sent!");
    } catch (error) {
      toast("Some Error Occured!");
    }
  };

  console.log(allergy, problem);
  return (
    <div>
      <ToastContainer />
      <section class="background1 mt-5 ">
        <div id="accordion" className="mr-5 ml-5">
          <Collapse data={patient} title="General Details" count="One" />
          <Collapse data={vitals} title="Vital Details" count="Two" />
          <Collapse data={social} title="Social Details" count="Three" />
          <Table
            data={allergy}
            keys={allergyKeys}
            title="Allergies"
            count="Four"
          />
          <Table
            data={problem}
            keys={problemKeys}
            title="Problem Details"
            count="Five"
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group ">
            <div className="input-group-prepend">
              <span className="input-group-text ml-5">
                <button className="btn btn-dark m-0" type="submit">
                  Send
                </button>
              </span>
            </div>
            <textarea
              className="form-control mr-5"
              aria-label="With textarea"
              placeholder="Send message to your Doctor"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </form>
      </section>
    </div>
  );
};

export default PatientsDetails;

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
