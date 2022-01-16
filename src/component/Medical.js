import React, { Component } from "react";
// import "./Dasboard.css";
import "./Medical.css";

import axios from "axios";
class Prescription extends Component {
	constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            doses:[],
            DataisLoaded: false
        };
        let patient_id=localStorage.getItem('patient_id')
    }
	componentDidMount() {
        fetch(
"http://127.0.0.1:8000/api/patient/${patient_id}/medications")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })

            fetch(
                "http://127.0.0.1:8000/api/patient/${patient_id}/dose")
                            .then((res) => res.json())
                            .then((json) => {
                                this.setState({
                                    doses: json,
                                    
                                });
                            })
    }


		render() {
    return (
      <div>
          <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container d-flex justify-content-center">
            <div class="col-lg-8 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Medical Details</h4>
                        {/* <p class="card-description">Prescription  </p> */}
                        <div class="table-responsive">
                            <table class="table">
                               
                                <tbody>
                                    <tr>
                                        <td>Medication_name</td>
                                        
                                        <td>12 May 2017</td>
                                        <td><label class="badge badge-danger">Pending</label></td>
                                    </tr>
                                    <tr>
                                        <td>Medication_manufacturer</td>
                                       
                                        <td>15 May 2015</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                    </tr>
                                    <tr>
                                        <td>Expire</td>
                                       
                                        <td>14 May 2017</td>
                                        <td><label class="badge badge-info">Fixed</label></td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                       
                                        <td>16 May 2017</td>
                                        <td><label class="badge badge-success">Completed</label></td>
                                    </tr>
                                    <tr>
                                        <td>Dose_amount</td>
                                        
                                        <td>20 May 2017</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                    </tr>
                                    <tr>
                                        <td>Dose_timing</td>
                                        
                                        <td>20 May 2017</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                    </tr>
                                    <tr>
                                        <td>Dose_description</td>
                                        
                                        <td>20 May 2017</td>
                                        <td><label class="badge badge-warning">In progress</label></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
  );
}
	}

export default Prescription;