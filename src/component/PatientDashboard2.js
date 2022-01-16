import React from "react";
import "./Dasboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Scrollspy from "./patient/Scrollspy";
import PatientsDetails from "./patient/PatientsDetails";
import ProblemDetails from "./patient/ProblemDetails";
import Prescriptions from "./patient/Prescriptions";
import {useParams} from 'react-router';
import Moment from 'moment';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const PatientDashboard = () => {

  const token = localStorage.getItem("token")
  if(token == null){
      window.location.href = "/sign-in"
  }
  const params = useParams()
    // console.log(params)
  const [component, setComponent] = useState(1);
  const [all, setAll] = useState([])
  const [patient, setPatient] = useState({
    Id:"",
    Name: "",
    Age: "",
    Gender: "",
    Contact: "",    
    "Treatment under": "",
  });
  const [vitals, setVitals] = useState({
    Date: "",
    Height: "",
    Weight: "",
    Pulse: "",
    Temperature: "",
    "Blood Pressure": "",
  });
  const [medications, setMedications] = useState(null);
  const [allergy, setAllergy] = useState(null);
  const [problem, setProblem] = useState(null);


  const fetchPatientData = async () => {

  const id = localStorage.getItem("pat_id")

    
  
    const age = (dob1) => {
      var today = new Date();
      var birthDate = new Date(dob1); 
      var age_now = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age_now--;
      }
      console.log(age_now);
      return age_now;
    }


    try {
    const resp1 = await axios.get(`/api/patient/${id}/me`);
      setPatient({
        Id: resp1.data.id,
        Name: resp1.data.name,
        "Age": age(resp1.data.dob),
        Gender: resp1.data.gender,
        Contact: resp1.data.phone_number,
        "Treatment under": resp1.data.doctor_name,
      });
    } catch (error) {
      toast("Some Error Occured!")
    };
    

    try {
    const resp2 = await axios.get(`/api/patient/${id}/vitals`);
      setVitals({
        "Registered Date": Moment(resp2.data.date_added).format('Do MMM YYYY'),
        "Height(cm)": resp2.data.height,
        "Weight(kg)": resp2.data.weight,
        "Pulse(bpm)": resp2.data.pulse,
        'Temperature(F)': resp2.data.temperature,
        "Blood Pressure(mmHg)": resp2.data.blood_pressure,
      });
    } catch (error) {
      toast("Some Error Occured!")
    };
    
    let resp3
    try {
    resp3 = await axios.get(`/api/patient/${id}/medications`);
      setMedications(resp3.data);
    } catch (error) {
      toast("Some Error Occured!")
    };
    
    try {
    const resp4 = await axios.get(`/api/patient/${id}/allergy`);
      setAllergy(resp4.data);
    } catch (error) {
      toast("Some Error Occured!")
    };
    
    try {
    const resp5 = await axios.get(`/api/patient/${id}/problem`);
      setProblem(resp5.data);
    } catch (error) {
      toast("Some Error Occured!")
    };
    

    const fun = async (id) => {
      try{
        const { data } = await axios.get(`/api/patient/${id}/dose/`)
        return data
      } catch(error){
        toast("Some Error Occured!")
      };
        
    }
    let nw = []
    resp3.data.map(async (el) => {
        let dta = await fun(el.id)
        let obj = {
            "Medicine":el.medication_name, 
            "Description":dta.dose_description,
            "Timing":dta.dose_timing,
            "Amount":dta.dose_amount
        }
        nw.push(obj)
        // setAll(nw)
    })
    setAll(nw)
  };

  useEffect(() => {
    fetchPatientData();
  }, []);

  return (
    <div>
      <div className="body">
        <Navbar />

        <section className="content">
          <div className="box">
                <div className="mr-5 ml-5 rounded inner-box pb-5 mb-5">
              <Scrollspy num={setComponent} selected={component} />
              {component === 1 && (
                <PatientsDetails patient={patient} vitals={vitals} />
              )}
              {component === 2 && (
              <ProblemDetails problem={problem} allergy={allergy} />
              )}
              {component === 3 && <Prescriptions all={all} />}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default PatientDashboard;
