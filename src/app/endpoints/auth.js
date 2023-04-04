export default function auth(mutation) {
	const mutate = (query) => mutation({ query });
	return {
		/* Sign In */
		signIn: mutate((body) => ({
			url: "/signin",
			method: "POST",
			body,
		})),
		/* Sign Up / Register */
		signUp: mutate((body) => ({
			url: "/signup",
			method: "POST",
			body,
		})),
		addChild: mutate((body) => ({
			url: "/addChild",
			method: "POST",
			body,
		})),
		registerChild: mutate((body) => ({
			url: "/billing",
			method: "POST",
			body,
		})),
		checkEmail: mutate((email) => ({
			url: "/email",
			method: "POST",
			body: { email },
		})),
		checkPhone: mutate((phone) => ({
			url: "/phone",
			method: "POST",
			body: { phone },
		})),
		loginChild: mutate((body) => ({
			url: "/kid/home",
			method: "POST",
			body,
		})),
		/* Log out */
		logOut: mutate(() => ({
			url: "/logout",
			method: "POST",
		})),
		/* Get User Data */
		getUserData: mutate(() => ({ url: "/", method: "GET" })),
		resetPass: mutate(({ id, body }) => ({
			url: "/recover/" + id,
			method: "POST",
			body,
		})),
		createReset: mutate((body) => ({
			url: "/recover/",
			method: "POST",
			body,
		})),
	};
}
