import React, { useState, useEffect, useContext} from "react"
import { Link, withRouter, useHistory} from 'react-router-dom';
import { Context } from "../store/appContext";
import ThemeMode from "./ThemeMode";

export const Footer = () => {

	/* useEffect(() => {
		
        if(!store.estaAutenticado) history.push("/");

    }, []); */


	return (
		<footer className="p-2 fixed-bottom text-center ">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <ThemeMode />     
          </div>
		  <div className="col-2"> {/* <TextMode /> */}</div>
        </div>
      </footer>
	);
};

export default withRouter(Footer);