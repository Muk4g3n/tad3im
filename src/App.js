import { Suspense, useEffect, lazy } from "react";
import { /* useGetSettingsMutation, */ useGetUserDataMutation } from "app/backend";
import { /* useNotification, useSettings,*/ useUser } from "hooks";


import Fallback from "components/Fallback";
import "./App.css";
import Routes from "Routes";
import { BrowserRouter } from "react-router-dom";

const Error503 = lazy(() => import("pages/Errors/Error503"));
const Notification = lazy(() => import("components/Notification"));

function App() {
    const [GetUserData] = useGetUserDataMutation();
    const { setUser, removeUser } = useUser();

    useEffect(() => {
        GetUserData()
            .unwrap()
            .then((user) => setUser(user))
            .catch((e) => removeUser());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Suspense fallback={<Fallback />}>
            <BrowserRouter>
            <Routes/>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
