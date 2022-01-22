import React from "react";
import "../Dasboard.css";

const Scrollspy = ({ num, selected }) => {
  return (
    // <div className="nav-bar">
    //   <nav className="navbar bg-dark d-flex justify-content-around">

    //     <ul className="nav nav-pills" style={{alignItems:" stretch", justifyContent: "space-between"}}>
    //       <li className="nav-item" >
    // <button style={{borderBottom: selected ===1 ? "2px solid white" : "none"}} className="nav-link scroll" onClick={()=>num(1)}>
    //   Patient Details
    //   <span class="sr-only">(current)</span></button>
    //       </li>
    // <li className="nav-item">
    //   <button style={{borderBottom: selected ===2 ? "2px solid white" : "none"}} className="nav-link scroll" onClick={()=>num(2)}>
    //     Problem Details<span className="sr-only">(current)</span>
    //   </button>
    // </li>
    // <li className="nav-item">
    //   <button style={{borderBottom: selected ===3 ? "2px solid white" : "none"}} className="nav-link scroll" onClick={()=>num(3)}>
    //     Allergies<span className="sr-only">(current)</span>
    //   </button>
    // </li>
    // <li className="nav-item">
    //   <button style={{borderBottom: selected ===4 ? "2px solid white" : "none"}} className="nav-link scroll"  onClick={()=>num(4)}>
    //     Prescriptions
    //   </button>
    // </li>
    // <li className="nav-item">
    //   <button style={{borderBottom: selected ===5 ? "2px solid white" : "none"}} className="nav-link scroll"  onClick={()=>num(5)}>
    //     Messages
    //   </button>
    // </li>
    //     </ul>

    //   </nav>
    // </div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav1"
        aria-controls="navbarNav1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav1">
        <div className="navbar-nav m-auto d-flex justify-content-around">
        <ul
          class="navbar-nav nav-pills"
          style={{ alignItems: " stretch", justifyContent: "space-between" }}
        >
          <li class="nav-item active m-auto">
            <button
              style={{
                borderBottom: selected === 1 ? "2px solid white" : "none",
              }}
              className="nav-link scroll"
              onClick={() => num(1)}
            >
              Patient Details
              <span class="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item m-auto ">
            <button
              style={{
                borderBottom: selected === 2 ? "2px solid white" : "none",
              }}
              className="nav-link scroll"
              onClick={() => num(2)}
            >
              Problem Details<span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item  m-auto">
            <button
              style={{
                borderBottom: selected === 3 ? "2px solid white" : "none",
              }}
              className="nav-link scroll"
              onClick={() => num(3)}
            >
              Allergies<span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item  m-auto">
            <button
              style={{
                borderBottom: selected === 4 ? "2px solid white" : "none",
              }}
              className="nav-link scroll"
              onClick={() => num(4)}
            >
              Prescriptions
            </button>
          </li>
          <li className="nav-item m-auto">
            <button
              style={{
                borderBottom: selected === 5 ? "2px solid white" : "none",
              }}
              className="nav-link scroll"
              onClick={() => num(5)}
            >
              Messages
            </button>
          </li>
          {/* <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Scrollspy;
