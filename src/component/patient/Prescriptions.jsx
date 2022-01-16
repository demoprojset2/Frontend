import React from "react";
import Card from "../Card";
import PatientsNavbar from "./PatientsNavbar";
import "../Dasboard.css";
import axios from "axios";

const Prescriptions = ({ all }) => {
  // console.log(all)

  return (
    <div className="background1">
      <section className="mt-5">
        <div className="bg-light mr-5 ml-5">
          
            
          

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Medicine</th>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Timing</th>
          </tr>
        </thead>
        <tbody>
        {all.map((el) => (
          <tr>
            <td>{el.Medicine}</td>
            <td>{el.Description}</td>
            <td>{el.Amount}</td>
            <td>{el.Timing}</td>
          </tr>
      ))}
          
        </tbody>
      </table>
      </div>
    </section>
    </div>
  );
};

export default Prescriptions;
