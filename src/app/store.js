import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import Api, { api, path } from "./backend";
import { user, notification, settings, language } from "./slices";

const store = configureStore({
    reducer: {
        [path]: api,
        user,
        language,
        notification,
        settings,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(Api.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
export default store;
