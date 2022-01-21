import "./Dasboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import EditAllergy from "./doctorCRUD/EditAllergy"
import Scrollspy from "./doctorCRUD/Scrollspy";
import PatientsDetails from "./doctorCRUD/PatientsDetails";
import ProblemDetails from "./doctorCRUD/ProblemDetails";
import EditPrescriptions from "./doctorCRUD/EditPrescription";
import {useParams} from 'react-router';
import Moment from 'moment';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const EditPatient = () => {
  
  // const params = useParams()
    console.log("params")
  const [component, setComponent] = useState(1);
  const [all, setAll] = useState([])
  const [patient, setPatient] = useState({name:""});
  const [vitals, setVitals] = useState({
    Date: "",
    Height: "",
    Weight: "",
    Pulse: "",
    Temperature: "",
    "Blood Pressure": "",
  });


  const count=["One", "Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]

  const tobacco=(t)=>{
    if(t==='1'){
      return "Never Smoked"
    }else if(t==='2'){
      return "Current Smoker"
    }else{
      return "Former Smoker"
    }
  };

  const alcohol=(t)=>{
    if(t==='1'){
      return "Current Drinker"
    }else if(t==='2'){
      return "Former Drinker"
    }else{
      return "Non Drinker"
    }
  };



  const [medications, setMedications] = useState(null);
  const [allergy, setAllergy] = useState(null);
  const [problem, setProblem] = useState(null);
  const [social, setSocial] = useState({
    Tobacco:"",
    Alcohol:"",
  } );


  const fetchPatientData = async () => {
    const token = localStorage.getItem("token");
    console.log(token)
    if(token == null){
      window.alert("Please log in !")
      window.location.href = "/"
    }
    const header = {
      Authorization: "Bearer " + token,
    };

  const id = localStorage.getItem("pat_id")
  console.log(id)

    try {
    const resp1 = await axios.get(`/api/patients/${id}/details`,
    {headers:header});
      setPatient(resp1.data);
      console.log(resp1.data)
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
    const resp4 = await axios.get(`/api/patients/${id}/allergy`,
    {
      headers:header
    });
      setAllergy(resp4.data);
    } catch (error) {
      toast("Some Error Occured!")
    };
    
    try {
    const resp5 = await axios.get(`/api/doctors/${id}/problems`,
    {
      headers:header
    }
    );
      setProblem(resp5.data);
      console.log(resp5.data)
    } catch (error) {
      toast("Some Error Occured!")
    };

    try {
      const resp6= await axios.get(`/api/patient/${id}/social`);
      setSocial({
        Tobacco:tobacco(resp6.data.tobacco),
        Alcohol:alcohol(resp6.data.alcohol),
      }
      )
    } catch (error) {
      toast("Some Error Occured!")
    };
    

    const fun = async (id) => {
      try{
        const { data } = await axios.get(`/api/patient/${id}/dose`)
        return data
      } catch(error){
        toast("Some Error Occured!")
      };
        
    }
    let nw = []
    resp3.data.map(async (el) => {
        let dta = await fun(el.id)
        let obj = {
            "id":el.id,
            "Medicine":el.medication_name, 
            "Description":dta.dose_description,
            "Timing":dta.dose_timing,
            "Amount":dta.dose_amount
        }
        nw.push(obj)
    })
    setAll(nw)
  };

  useEffect(() => {
    console.log("here")
    fetchPatientData();
  }, []);

  return (
    <div>
      <div className="body">
        <Navbar />

        <section className="content">
          <div className="box">
            <h1 className="mt-5 mb-5 text-center">{`Patient name : ${patient.name}`}</h1>
            <div className="mr-5 ml-5 rounded inner-box pb-5 mb-5">
              <Scrollspy num={setComponent} selected={component} />
              {component === 1 && (
                <PatientsDetails patient={patient} vitals={vitals} social={social} />
              )}
              {component === 2 && (<ProblemDetails problem={problem}/>
              )}
              {component === 3 && (<EditAllergy allergy={allergy} />)}
              {
                component===4 && <EditPrescriptions all={all} />
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


export default EditPatient;