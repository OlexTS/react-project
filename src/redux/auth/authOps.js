import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  sessionStorage.setItem("token", token);
};

const removeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
  sessionStorage.removeItem("token");
};

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("users/signup", user);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axios.post("users/login", user);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("users/logout");
    removeAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token || sessionStorage.getItem('token');
    if (!persistedToken) {
      return thunkAPI.rejectWithValue("User is not login");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
