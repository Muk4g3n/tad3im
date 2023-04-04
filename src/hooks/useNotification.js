import {
	removeNotification,
	setNotification,
} from "../app/slices/notification";
import { useAppDispatch, useAppSelector } from "../app/store";

export default function useNotification() {
	const dispatch = useAppDispatch();
	const notification = useAppSelector((state) => state.notification);
	const closeNotification = () => {
		dispatch(removeNotification());
	};
	const set = ({
		title,
		description,
		type = "success",
		timeOut = 80000,
		name = "",
		message = "",
	}) => {
		dispatch(
			setNotification({
				title: title ?? name,
				description: description ?? message,
				type,
				timeOut,
			})
		);
		if (timeOut > 0)
			setTimeout(() => {
				closeNotification();
			}, timeOut);
	};
	const error = (err, timeOut = 10000) => {
		err = err.data ? err.data : err;
		dispatch(
			setNotification({
				title: err.name ?? err.Name ?? "Erreur inconnue",
				description: err.message ?? "Veuillez réessayer",
				type: "danger",
				timeOut,
			})
		);
	};
	
	return { Notify: set, notification, closeNotification, Errofy: error };
}
