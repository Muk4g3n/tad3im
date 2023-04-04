import { createSlice } from '@reduxjs/toolkit';

const initial = localStorage.getItem('Language') || "FR" ;

const Language = createSlice({
  name: 'Language',
  initialState: initial,
  reducers: {
    setLang: (state, action) => {
      localStorage.setItem('Language', action.payload);
      state = action.payload ?? "FR";
      return state;
    },
  },
});

export const { setLang  } = Language.actions;

export default Language.reducer;
