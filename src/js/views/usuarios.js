import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserCard} from "../component/UserCard"
/* import { Modal } from "../component/Modal"; */

export const Usuarios = () => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{<UserCard onDelete={() => setState({ showModal: true })} />}
					</ul>
				</div>
			</div>
			{/* <Modal show={state.showModal} onClose={() => setState({ showModal: false })} /> */}
		</div>
	);
};
