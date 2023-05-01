import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
  error: object | null;
  message: string;
  profile: object | null;
}
const initialState: InitialState = {
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
      state.error = null;
      state.message = "";
    },
    profileSuccess: (state, payload) => {
      state.isLoading = false;
      state.error = null;
      state.message = payload.payload;
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
