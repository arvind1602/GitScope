import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch GitHub user data
export const fetchApi = createAsyncThunk("fetchApi", async (username, thunkAPI) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`User not found (status ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Initial state
const initialState = {
  data: JSON.parse(localStorage.getItem("githubUser")) || null,
  isLoading: false,
  isError: false,
  errorMsg: "",
};

// Slice
const handleSlice = createSlice({
  name: "handle",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errormsg = "";
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false
        state.errormsg = "";
        localStorage.setItem("githubUser", JSON.stringify(action.payload));
      })
      .addCase(fetchApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errormsg = action.payload || "Failed to fetch user";
        state.data = null;
        localStorage.removeItem("githubUser");
      });
  },
});

export default handleSlice.reducer;
