import { createSlice } from '@reduxjs/toolkit';

const initial = { open: false };
const notifications = createSlice({
	name: "notifications",
	initialState: initial,
	reducers: {
		setNotification: (state, { payload: { title, description, type, timeOut } }) => ({
			title,
			description,
			type,
			timeOut,
			open: true,
		}),
		removeNotification: () => {
			return { open: false };
		},
	},
});

export const { setNotification, removeNotification } = notifications.actions;

export default notifications.reducer;
