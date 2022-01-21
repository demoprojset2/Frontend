import React from "react";
import { useState } from "react";

const Table = ({ title, data, count, keys }) => {

  return (
    <div class="card mb-2">
      <div class="card-header d-flex flex-row justify-content-between" id="heading">
        <h4 class="mb-0">{title}</h4>
          <button
            class="btn btn-link collapsed text-dark"
            data-toggle="collapse"
            data-target={"#collapse" + count}
            aria-expanded="true"
            aria-controls="collapse"
          >
           <i class="fas fa-chevron-circle-down"></i>
          </button>
        
      </div>
      <div
        id={"collapse" + count}
        class="collapse"
        aria-labelledby="heading"
        data-parent="#accordion"
      >
        <div class="card-body">
          <div className="table-responsive">
            <table class="table bg-light">
              <thead class="thead-dark">
                <tr>
                  {keys.map((el) => (
                    <th scope="col">{el}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((obj) => {
                    return (
                      <tr key={Math.random()}>
                        {Object.keys(obj).map((objKey) => (
                          <td>{obj[objKey]}</td>
                        ))}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
