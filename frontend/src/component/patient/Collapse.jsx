import React from "react";

const collapse = ({ title, data,count }) => {
  return (
  
      <div class="card mb-2">
        <div class="card-header d-flex flex-row justify-content-between" id="heading" >
          <h4 class="mb-0"> {title}</h4>
            <button
              class="btn btn-link collapsed text-dark"
              data-toggle="collapse"
              data-target={"#collapse"+count}
              aria-expanded="true"
              aria-controls="collapse"
            >
             <i class="fas fa-chevron-circle-down"></i>
              
            </button>
        </div>
        <div
          id={"collapse"+count}
          class="collapse"
          aria-labelledby="heading"
          data-parent="#accordion"
        >
          <div class="card-body">
          {Object.keys(data).map((key) => (
            <p className="card-text">
              {key} : {data[key]}
            </p>
          ))}
          </div>
        </div>
      </div>
  
  );
};

export default collapse;
