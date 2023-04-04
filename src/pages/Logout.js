import Fallback from "components/Fallback";
import { useLogout } from "hooks";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Logout() {
	const handleLogout = useLogout();

	useEffect(() => {
		handleLogout();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Helmet>
				<title>Deconnecter - My Bloom Market</title>
			</Helmet>
			<Fallback />
		</>
	);
}
