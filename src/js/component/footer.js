import React from "react"
import {  withRouter} from 'react-router-dom';
import ThemeMode from "./ThemeMode";

export const Footer = () => {

	return (
		<footer className="p-2 fixed-bottom text-center ">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-2">
            <ThemeMode />     
          </div>
		  <div className="col-2"> </div>
        </div>
      </footer>
	);
};

export default withRouter(Footer);