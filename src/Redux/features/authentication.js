import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://ebus-backend-j2nq.onrender.com";

// Admin Signin
const AdminSignin = createAsyncThunk(
  "auth/AdminSignin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/adminLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

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

// User userSignup
const userSignup = createAsyncThunk(
  "auth/userSignup",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/registerUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

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

// User Signin
const userSignin = createAsyncThunk(
  "auth/Signin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/auth/userLogin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

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

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    data: null,
  },
  extraReducers: (builder) => {
    // Admin Signin
    builder
      .addCase(AdminSignin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(AdminSignin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;

        localStorage.setItem("admin_token", action.payload.admin_token);
      })
      .addCase(AdminSignin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });

    // User userSignup
    builder
      .addCase(userSignup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });

    // User Signin
    builder
      .addCase(userSignin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userSignin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(userSignin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });
  },
});

export { AdminSignin, userSignup, userSignin };
export default authSlice.reducer;
