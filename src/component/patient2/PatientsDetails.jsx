import React from 'react'
import Card from '../Card2';
import "../Dasboard.css";

const PatientsDetails = ({patient,vitals}) => {
    return (
        <div>
            <section class="cardBox background1 mt-5">
              <div class="row card-container">
                <div class="col-md-6 card-container-container ">
                  <div class="card text-center w-75">
                    <Card data={patient} title="General Details" />
                  </div>
                </div>
                <div class="col-md-6 card-container-container ">
                  <div class="card card1 text-center w-75">
                    <Card data={vitals} title="Vital Details" />
                  </div>
                </div>
              </div>
            
              
            </section>
        </div>
    )
}

export default PatientsDetails
