import React from "react";
import "./Dasboard.css";

const Card = ({title}) => {
  return (
    <div >
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div class="card-body preamble" id="zen-preamble" role="article"> 
        <p class="card-text">id :</p>
        <p class="card-text">name : </p>
        <p class="card-text">Start Date</p>
        <p class="card-text">End Date </p>
        <p class="card-text">problem</p>
        {/* <p class="card-text">asdfghjknbv </p>
                      <p class="card-text">asdfghjknbv </p> */}
      </div>
    </div>
  );
};

export default Card;
