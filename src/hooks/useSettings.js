import { setSettings } from "app/slices/settings";
import { useAppDispatch, useAppSelector } from "../app/store";

export default function useSettings() {
	const dispatch = useAppDispatch();
	return {
		settings: useAppSelector((state) => state.settings),
		setSettings: (settings) => {
			dispatch(setSettings(settings));
		},
	};
}
