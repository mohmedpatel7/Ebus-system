import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000";

const AdminSigin = createAsyncThunk(
  "AdminSigin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData); // Send backend error to the reducer
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ message: "Internal server error..!" });
    }
  }
);

const Signup = createAsyncThunk(
  "Signup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/registerUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData); // Send backend error to the reducer
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ message: "Internal server error..!" });
    }
  }
);

const Signin = createAsyncThunk(
  "Signup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/userLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if the response is not OK
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData); // Send backend error to the reducer
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue({ message: "Internal server error..!" });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    data: null,
  },

  extraReducers: (builder) => {},
});

export default authSlice.reducer;
