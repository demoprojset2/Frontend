import React from 'react'
import Card from '../Card'
import PatientsNavbar from './PatientsNavbar'

const ProblemDetails = () => {
    return (
        <div>
             <section class="cardBox background1 mt-5">
              <div class="row card-container">
                <div class="col-md-6 card-container-container ">
                  <div class="card text-center w-75">
                    <Card title="Allergy" />
                  </div>
                </div>
                <div class="col-md-6 card-container-container ">
                  <div
                    class="card card1 text-center w-75"
                    id="zen-explanation"
                    role="article"
                  >
                    <Card title="Problems" />
                  </div>
                </div>
              </div>
            </section>

        </div>
    )
}

export default ProblemDetails
