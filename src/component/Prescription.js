import React, { Component } from "react";
import "./Dasboard.css";
import axios from "axios";
class Prescription extends Component {
	constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
	componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }


		render() {
    return (
      <div>
{/* <div class="col-md-6 card-container-container "> */}
				<div class="card text-center">
					<div class="card-header">
						<h3>Patient's Detail</h3>
					</div>
					<div class="card-body preamble" id="zen-preamble" role="article">
						<p class="card-text"> Name : </p>
						<p class="card-text"> Date : </p>
						<p class="card-text">sdfghj</p>
					    <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
                        <p class="card-text">asdfghjknbv </p>
					</div>
					{/* <div>
					{
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name: { item.username }, 
                    Full_Name: { item.name }, 
                    User_Email: { item.email } 
                    </ol>
                ))
            }
			</div> */}
				</div>
		    {/* </div> */}
</div>
  );
}
	}

export default Prescription;