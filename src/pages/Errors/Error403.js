import React from "react";
import { Link } from "react-router-dom";
import './errors.css'


const Error403 = () => {
	return (
		<div
			className="holder"
			
		>
			<div className="col-md-5">
				<div className="form-input-content text-center error-page">
					<h1 className="error-text  font-weight-bold">403</h1>
					<h4>
						<i className="fa fa-times-circle text-danger" /> Erreur interdite !
					</h4>
					<p>Vous n'avez pas la permission de consulter cette ressource.</p>
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

export default Error403;
