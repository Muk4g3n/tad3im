import React from "react";
import { Link } from "react-router-dom";
import './errors.css'

const Error400 = () => {
	return (
		<div
			className="holder"
			
		>
			<div className="col-md-5">
				<div className="form-input-content text-center error-page">
					<h1 className="error-text font-weight-bold">400</h1>
					<h4>
						<i className="fa fa-thumbs-down text-danger" /> Mauvaise demande
					</h4>
					<p>Votre demande a donné lieu à une erreur</p>
					<div>
						<Link className="btn btn-primary" to="/">
							Retour à l'accueil
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error400;
