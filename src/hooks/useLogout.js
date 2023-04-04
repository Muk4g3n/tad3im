import { useLogOutMutation } from "app/backend";
import { useNotification, useUser } from "hooks";

export default function useLogout() {
	const { removeUser } = useUser();

	const { Notify } = useNotification();

	const [logout] = useLogOutMutation();

	return () => {
		logout()
			.unwrap()
			.then(() => {
				removeUser();
				Notify({
					title: "Vous êtes déconnecté",
					type: "success",
				});
			})
			.catch((e) => {
				console.error(e);
			});
	};
}
