import { setLang } from "../app/slices/language";
import { useAppDispatch, useAppSelector } from "../app/store";

export default function useLang() {
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.language);
	const set = (lang) => {
		dispatch(setLang(lang));
	};
	return { setLanguage: set, language };
}
