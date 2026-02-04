import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const api = axios.create({
  baseURL: "https://697cfa1c97386252a2674b38.mockapi.io/products/products",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchItems = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);