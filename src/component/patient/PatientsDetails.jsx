import React from 'react'
import Card from '../Card';
import "../Dasboard.css";

const PatientsDetails = () => {
    return (
        <div>
            <section class="cardBox background1 mt-5">
              <div class="row card-container">
                <div class="col-md-6 card-container-container ">
                  <div class="card text-center w-75">
                    <Card title="Patient Details" />
                  </div>
                </div>
                <div class="col-md-6 card-container-container ">
                  <div class="card card1 text-center w-75">
                    <Card title="Doctor Details" />
                  </div>
                </div>
              </div>
            </section>

            <div class="card text-center mw-100 mr-5 ml-5">
                <Card title="Vital Details" />
            </div>

            {/* <div className="card mw-100" style={{ textAlign: "center" }}>
                <h1>Vital Details</h1>
                <p class="card-text">Doctor's Id : </p>
                <p class="card-text">Doctor's Name : </p>
                <p class="card-text">Speciality : </p>
                <p class="card-text">Contact No : </p>
                <p class="card-text">Email: </p>
            </div> */}
            
        </div>
    )
}

export default PatientsDetails
