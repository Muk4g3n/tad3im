import React from "react";
import './errors.css'

class Error503 extends React.Component {
	render() {
		return (
			<div
				className="holder"
			
			>
				<div className="col-md-5">
					<div className="text-center error-page">
						<h1 className="error-text font-weight-bold">503</h1>
						<h4>
							<i className="fa fa-times-circle text-danger" /> Service Unavailable
						</h4>
						<p>Sorry, we are under maintenance!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Error503;
