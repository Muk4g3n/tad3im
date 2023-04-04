import React from "react";
import { Link } from "react-router-dom";
import './errors.css'

const Error404 = () => {
	return (
		<div
			className="holder"
			
		>
			<div className="col-md-5">
				<div className="form-input-content text-center error-page">
					<h1 className="error-text font-weight-bold">404</h1>
					<h4>
						<i className="fa fa-exclamation-triangle text-warning" /> La page que vous
						n'est pas trouvée !
					</h4>
					<p>
						Vous avez peut-être fait une erreur de frappe dans l'adresse ou la page a pu
						être déplacée.
					</p>
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

export default Error404;
