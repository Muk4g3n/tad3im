import { createSlice } from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("Settings") || "null") ;


const settings = createSlice({
	name: "settings",
	initialState: initial,
	reducers: {
		setSettings: (state, action) => {
			localStorage.setItem("Settings", JSON.stringify(action.payload));
			state = action.payload ?? null;
			return state;
		},
	},
});

export const { setSettings } = settings.actions;

export default settings.reducer;
