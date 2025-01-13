import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:5000";

//Add Bus
const addBus = createAsyncThunk(
  "auth/addBus",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("admin_token");
      console.log(token);
      console.log(payload);
      if (!token) {
        return rejectWithValue({ message: "No admin token found" });
      }
      const response = await fetch(`${url}/api/buses/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "admin-token": token,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue({ message: "Internal server error..!" });
    }
  }
);

//Api call for fetching bus details for admin.
const fetchBusesDetails = createAsyncThunk(
  "auth/fetchBusesDetails",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/buses/fetchBusDetailsAdmin`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "admin-token": localStorage.getItem("admin_token"),
        },
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

//Api call for fetching bus details for user.
const fetchBusesDetailsUser = createAsyncThunk(
  "auth/fetchBusesDetailsUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${url}/api/buses/fetchBusDetailsUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
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

const addBusSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    //Add Bus
    builder
      .addCase(addBus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(addBus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });

    // fetchBusesDetails for admin.
    builder
      .addCase(fetchBusesDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBusesDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchBusesDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });

    // fetchBusesDetails for user.
    builder
      .addCase(fetchBusesDetailsUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBusesDetailsUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchBusesDetailsUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || {
          message: "Unexpected error occurred",
        };
      });
  },
});

export { addBus, fetchBusesDetails, fetchBusesDetailsUser };
export default addBusSlice.reducer;
