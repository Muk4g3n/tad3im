import * as Yup from "yup";
import YupPassword from "yup-password";

import MyInput from "components/MyInput";
import Auth from "./Auth";
import { Link } from "react-router-dom";
import { /* useCheckEmailMutation, */ useSignUpMutation, useCheckPhoneMutation } from "app/backend";
import { Helmet } from "react-helmet-async";

YupPassword(Yup);
export default function Registration({
	onClick = () => {},
	msg = "S'inscrire",
	title = "Inscription",
}) {
	/* const [checkEmail] = useCheckEmailMutation(); */
	const [checkPhone] = useCheckPhoneMutation();
	const validationSchema = Yup.object().shape({
		password: Yup.string()
			.required("Le mot de passe est requis")
			.min(8, "Le mot de passe doit contenir 8 caractères ou plus."),
		/* .minLowercase(1, "le mot de passe doit contenir au moins 1 lettre minuscule")
			.minUppercase(1, "le mot de passe doit contenir au moins 1 lettre majuscule")
			.minNumbers(1, "le mot de passe doit contenir au moins 1 chiffre")
			.minSymbols(1, "le mot de passe doit contenir au moins un caractère spécial"), */

		name: Yup.string().required("Le nom est obligatoire"),

		phone: Yup.string()
			.required("Le numéro de téléphone est nécessaire")
			.test(
				"check",
				"Existe déjà, vous devriez peut-être essayer de vous connecter",
				async (phone) =>
					await checkPhone(phone)
						.unwrap()
						.then(() => true)
						.catch(() => false)
			),
		stay: Yup.boolean(),
	});

	return (
		<Auth
			message={{ title: "Inscription", message: "Vous vous êtes inscrit sur la plateforme" }}
			validationSchema={validationSchema}
			useMutation={useSignUpMutation}
			initialValues={{
				password: "",
				stay: false,

				name: "",
				phone: "",
			}}
		>
			{({ getFieldProps, getError, isLoading, setFieldValue }) => (
				<>
					<Helmet>
						<title>Inscription - My Bloom Market</title>
						<meta
							name="description"
							content="Pour pouvoir vous connecter au site Web, vous devez d'abord créer un compte. c'est une étape facile, vous n'avez qu'à remplir les informations nécessaires pour que votre livraison soit correcte."
						/>
					</Helmet>
					<h2 className="account-sub-title mb-2 font-weight-bold text-capitalize text-v-dark">
						{title}
					</h2>

					<MyInput
						getFieldProps={getFieldProps}
						label={"Numéro de téléphone"}
						type={"text"}
						name={"phone"}
						getError={getError}
					/>
					<MyInput
						getFieldProps={{ getFieldProps }}
						label={"Mot de pass"}
						type={"password"}
						name={"password"}
						placeholder={"Enter your password"}
						getError={getError}
					/>

					<MyInput
						getFieldProps={getFieldProps}
						label={"Nom"}
						type={"text"}
						name={"name"}
						getError={getError}
					/>

					<div className="woocommerce-LostPassword lost_password d-flex flex-column flex-sm-row justify-content-between mb-4">
						<Link
							to="/connectez-vous/#Top"
							className="text-v-dark font-weight-semibold"
							onClick={onClick}
						>
							Vous avez déjà un compte ?
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
							{msg /*  */}
						</button>
					</p>
				</>
			)}
		</Auth>
	);
}
