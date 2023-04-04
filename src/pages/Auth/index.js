import React from "react";
import { useFormik, Form, FormikProvider } from "formik";

import { useNotification, useUser } from "hooks";

export default function Auth({
	message,
	children,
	useMutation,
	validationSchema,
	initialValues,
	then,
}) {
	const [Auth, { isLoading }] = useMutation();
	const { setUser } = useUser();
	const { Notify, Errofy } = useNotification();
	const formik = useFormik({
		initialValues,
		validationSchema,
		validateOnChange: true,
		onSubmit: (body) => {
			console.log(body);
			Auth(body)
				.unwrap()
				.then(
					then
						? then
						: (user) => {
							setUser(user);
							Notify(message);
							// eslint-disable-next-line no-undef
							fbq("track", "CompleteRegistration");
						}
				)
				.catch((e) => {
					console.error(e);
					Errofy(e);
				});
		},
	});
	const { errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik;
	// console.log(errors)
	const getError = (name) => touched[name] && errors[name];
	return (

					<FormikProvider value={formik}>
						<Form
							onSubmit={handleSubmit}
						>
							{children({
								getFieldProps,
								getError,
								isLoading,
								setFieldValue,
							})}
						</Form>
					</FormikProvider>
	);
}
