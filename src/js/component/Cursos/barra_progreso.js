import React from "react";



export const Barra_Progreso = () => {

    const mystyle = { width: "80%" };
    const progreso = { height: "30px"};

    return(
        <div className="row my-3">
      <div className="col-1 m-auto text-center">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">
            &times;
          </span>
        </button>
      </div>
      <div className="col-11 m-auto text-center">
        <div className="progress my-4" >
          <div
            className="progress-bar progress-bar-striped bg-info"
            role="progressbar"
            style={mystyle}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
    )

};
