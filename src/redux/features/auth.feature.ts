import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isLoading: boolean;
  error: string;
  isAuth: boolean;
  user: any;
}
const initialState: InitialState = {
  isLoading: false,
  error: "",
  isAuth: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("auth_token");
      state.user = {};
    },
    confirmPassword: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(
    //   login.fulfilled,
    //   (
    //     state,
    //     action: PayloadAction<{
    //       user: any;
    //       token: string;
    //     }>
    //   ) => {
    //     localStorage.setItem("auth_token", action.payload.token);
    //     state.isLoading = false;
    //     state.user = action.payload.user;
    //   }
    // );
    // builder.addCase(login.rejected, (state, action: any) => {
    //   state.isLoading = false;
    //   state.error = action.payload.message;
    // });
    // builder.addCase(register.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = "";
    // });
    // builder.addCase(register.fulfilled, (state) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(register.rejected, (state, action: any) => {
    //   state.isLoading = false;
    //   state.error = action.payload.message;
    // });
  },
});

export const { logout, confirmPassword } = authSlice.actions;

export default authSlice.reducer;
