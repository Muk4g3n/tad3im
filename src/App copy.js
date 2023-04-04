import { Suspense, useEffect, lazy } from "react";
import { useGetSettingsMutation, useGetUserDataMutation } from "app/backend";
import { /* useNotification, */ useSettings, useUser } from "hooks";

import Fallback from "components/Fallback";
import "bootstrap/scss/bootstrap.scss";
import "css/style.css";


/* const Top = lazy(() => import("layout/Top")); */
const QuickView = lazy(() => import("layout/QuickView"));
const OrderView = lazy(() => import("layout/OrderView"));
const Footer = lazy(() => import("layout/Footer"));
const Header = lazy(() => import("layout/Header"));
const SideBar = lazy(() => import("layout/SideBar"));
const Routes = lazy(() => import("Routes"));
const Notification = lazy(() => import("components/Notification"));
const Error503 = lazy(() => import("pages/Errors/Error503"));

// eslint-disable-next-line no-extend-native
String.prototype.clean = function () {
	return encodeURI(
		this.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replaceAll(/[^\w\d]/g, "-")
	);
};

function App() {
	const [GetUserData] = useGetUserDataMutation();
	const [GetSettings, { isLoading }] = useGetSettingsMutation();
	const { settings, setSettings } = useSettings();
	const { setUser, removeUser } = useUser();

	useEffect(() => {
		GetUserData()
			.unwrap()
			.then((user) => setUser(user))
			.catch((e) => removeUser());
		GetSettings()
			.unwrap()
			.then((settings) => {
				if (settings) setSettings(settings);
				else throw new Error("Les paramètres ont mal tourné");
			})
			.catch((e) => console.error(e));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	if (!settings && isLoading) return <Fallback />;
	if (!settings)
		return (
			<Suspense fallback={<Fallback />}>
				<Error503 />
			</Suspense>
		);
	return (
		<Suspense fallback={<Fallback />}>
			<QuickView />
			<OrderView />
			<div className="page-wrapper">
				{/* <Top /> */}
				<Header />
				<div className="container" style={{ minHeight: "500px" }}>
					<div className="row main-content-wrap">
						<Routes />
					</div>
				</div>
				<Footer />
				<SideBar />
				<Notification />
			</div>
		</Suspense>
	);
}
//export default withResizeDetector(App);
export default App;
