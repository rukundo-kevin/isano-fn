import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { localUrl, handleErrorResponse } from ".";
const sms_url = import.meta.env.VITE_SMS_PROVIDER_URL;

interface Login {
  username: string;
  password: string;
}

interface Register {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "user/login",
  async (myFields: Login, { rejectWithValue }) => {
    try {
      console.log(localUrl);
      const res = await axios.post(`${localUrl}/auth/signin`, myFields);
      localStorage.setItem("auth_token", res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (data: Register, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${localUrl}/auth/signup`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      if (phoneNumber.length < 10)
        return rejectWithValue({ message: "Phone number must be 10 digits" });
      const res = await axios.post(
        `${sms_url}`,
        {
          from: "PocketMoney",
          to: `250789431549`,
          message: "SMS to be sent",
        },
        {
          headers: {
            "Content-Type": "application/json",
            uuid: "pocketmoneyrwanda@gmail.com",
            password: "3853e14d-7d60-45c4-b90a-81696aae1350",
          },
        }
      );
      console.log(res.data);

      return { message: "success" };
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (
    { email, token }: { email: string; token: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await axios.put(`${localUrl}reset/${token}`, {
        email,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);

export const updatePasword = createAsyncThunk(
  "user/updatePassword",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${localUrl}auth/update-password`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`${localUrl}auth/`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(handleErrorResponse(error));
    }
  }
);
