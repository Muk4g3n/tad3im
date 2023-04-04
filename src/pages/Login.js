import * as Yup from "yup";
//import YupPassword from "yup-password";
import { Field } from "formik";

import MyInput from "components/MyInput";
import Auth from "./Auth";
import { Link } from "react-router-dom";
import { useSignInMutation } from "app/backend";
import { Helmet } from "react-helmet-async";
//YupPassword(Yup);
export default function Login({ onClick = () => {}, msg = "Connectez-vous" }) {
	const validationSchema = Yup.object().shape({
		phone: Yup.string().required("Le numéro de téléphone est obligatoire"),

		password: Yup.string()
			.required("Le mot de passe est requis")
			.min(8, "Le mot de passe doit contenir 8 caractères ou plus."),
		/* 	  
			.minLowercase(1, "password must contain at least 1 lower case letter")
			.minUppercase(1, "password must contain at least 1 upper case letter")
			.minNumbers(1, "password must contain at least 1 number")
			.minSymbols(1, "password must contain at least 1 special character"),
		name: Yup.string().required("Last name is required"),
		birthDate: Yup.string().required("Birth Date is required"),
		gender: Yup.string().required("Gender is required"),
		role: Yup.string().required("Role is required"),
		phone: Yup.string().required("Phone is required"), */
	});

	return (
		<Auth
			message={{ title: "Se connecter", message: "Vous vous êtes connecté à la plateforme" }}
			validationSchema={validationSchema}
			useMutation={useSignInMutation}
			initialValues={{
				email: "",
				password: "",
				stay: false,
			}}
		>
			{({ getFieldProps, getError, isLoading }) => (
				<>
					<Helmet>
						<title>Connectez-vous - My Bloom Market</title>
						<meta
							name="description"
							content="Pour commander un produit sur MyBloomMarket, vous devez d'abord vous connecter au site Web. bienvenue parmi nous."
						/>
					</Helmet>
					<h2 className="account-sub-title mb-2 font-weight-bold text-capitalize text-v-dark">
						Connectez-vous
					</h2>
					<MyInput
						getFieldProps={getFieldProps}
						label={"Numéro de téléphone"}
						placeholder={"Entrez votre numéro de téléphone"}
						type={"text"}
						name={"phone"}
						getError={getError}
					/>
					<MyInput
						getFieldProps={{ getFieldProps }}
						label={"Mot de passe"}
						type={"password"}
						name={"password"}
						placeholder={"Entrez votre mot de passe"}
						getError={getError}
					/>

					<div className="woocommerce-LostPassword lost_password d-flex flex-column flex-sm-row justify-content-between mb-4">
						<div className="porto-checkbox my-2 my-sm-0">
							<Field
								id="stay"
								className="porto-control-input woocommerce-form__input woocommerce-form__input-checkbox"
								type="checkbox"
								name="stay"
							/>
							<label className="porto-control-label no-radius" htmlFor="stay">
								Restez connecté
							</label>
						</div>
						<Link
							to="/inscrire/#Top"
							className="text-v-dark font-weight-semibold"
							onClick={onClick}
						>
							Vous n'avez pas encore de compte ?
						</Link>
					</div>
					<p className="form-row mb-3 mb-lg-0 pb-1 pb-lg-0">
						<button
							type="submit"
							className={
								"woocommerce-Button button login-btn  py-3 text-md w-100 " +
								(isLoading ? "btn-v-dark" : "")
							}
							disabled={isLoading}
						>
							{msg}
						</button>
					</p>
				</>
			)}
		</Auth>
	);
}
