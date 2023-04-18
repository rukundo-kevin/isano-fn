// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
  profile: null,
};

export const profileSlicer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profilePending: (state) => {
      state.isLoading = true;
      state.error = "";
      state.message = "";
    },
    profileSuccess: (state, payload) => {
      state.isLoading = false;
      state.error = "";
      state.message = payload;
    },
    profileFail: (state, payload) => {
      state.isLoading = false;
      state.error = payload;
      state.message = "";
    },
  },
});

export const { profilePending, profileSuccess, profileFail } =
  profileSlicer.actions;

export default profileSlicer.reducer;
