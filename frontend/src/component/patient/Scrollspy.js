import React from "react";
import "../Dasboard.css";


const Scrollspy = ({num,selected}) => {
    
  return (
    <div className="nav-bar">
      <nav className="navbar bg-dark d-flex justify-content-around">
      
        <ul className="nav nav-pills" style={{alignItems:" stretch", justifyContent: "space-between"}}>
          <li className="nav-item" >
            <button style={{borderBottom: selected ===1 ? "2px solid white" : "none" , fontSize:"1.5rem"}} className="nav-link scroll" onClick={()=>num(1)}>
              Patient Details
              <span class="sr-only">(current)</span></button>
          </li>
          <li className="nav-item">
            <button style={{borderBottom: selected ===2 ? "2px solid white" : "none" , fontSize:"1.5rem"}} className="nav-link scroll"  onClick={()=>num(2)}>
              Prescriptions
            </button>
          </li>
        </ul>
        
        
      </nav>
    </div>
  );
};

export default Scrollspy;
