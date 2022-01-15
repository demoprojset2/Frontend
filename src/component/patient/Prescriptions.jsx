import React from "react";
import Card from "../Card";
import PatientsNavbar from "./PatientsNavbar";
import "../Dasboard.css";

const Prescriptions = () => {
  return (
    <div className="background1">
        <div class="card text-center mw-100 mr-5 ml-5 mt-5">
                <Card title="Prescriptions" />
            </div>
        {/* <section className="cardBox background1 mt-5">
      <div className="card-container-container">
        <div
          className="card card1 text-center explanation mw-100"
          id="zen-explanation"
          role="article"
        >
          <Card title="Prescriptions" className="mw-100" />
        </div>
      </div>
      </section> */}
    </div>
  );
};

export default Prescriptions;
