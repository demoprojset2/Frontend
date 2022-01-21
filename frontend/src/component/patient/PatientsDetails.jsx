import React from "react";
import Card from "../Card";
// import "../Dasboard.css";
import Collapse from "./Collapse";
import Table from "./Table";

const PatientsDetails = ({ patient, vitals, social, allergy, problem }) => {


  const allergyKeys = ["Type","Substance","Criticality","Status"]
  const problemKeys = ["Description","Severity","Status"]

  console.log(allergy,problem)
  return (
    <div>
      <section class="background1 mt-5 ">
        <div id="accordion" className="mr-5 ml-5">
          <Collapse data={patient} title="General Details" count="One" />
          <Collapse data={vitals} title="Vital Details" count="Two" />
          <Collapse data={social} title="Social Details" count="Three" />
          <Table data={allergy} keys={allergyKeys} title="Allergies" count="Four" />
          <Table data={problem} keys={problemKeys} title="Problem Details" count="Five" />
        </div>
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
