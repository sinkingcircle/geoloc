import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOfficer: false, 
};

const officerSlice = createSlice({
  name: 'officer',
  initialState,
  reducers: {

    setIsOfficer: (state, action) => {
      state.isOfficer = action.payload;
    },
  },
});


export const { setIsOfficer } = officerSlice.actions;
export default officerSlice.reducer;
