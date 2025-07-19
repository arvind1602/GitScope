import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchRepoApi = createAsyncThunk("fetchRepoApi", async (url) => {
  const responce = await fetch(url);
  if (!responce.ok) {
    throw Error(`user not found ${responce.status}`);
  }
  const data = await responce.json();

  
  
  return data;
});

const initialstate = {
  data: JSON.parse(localStorage.getItem("githubUserRepo"))||null,
  isloading: false,
  iserror: false,
  errormsg: "",
};

const RepoSlice = createSlice({
  name: "repoApi",
  initialState: initialstate,
  extraReducers: (builder) => {
    builder.addCase(fetchRepoApi.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(fetchRepoApi.fulfilled, (state, action) => {
      state.isloading = false;
      state.data = action.payload;
       localStorage.setItem("githubUserRepo", JSON.stringify(action.payload));
    });
    builder.addCase(fetchRepoApi.rejected, (state, action) => {
      state.isloading = false;
      state.iserror = true;
      state.errormsg = action.error.message;
    });
  },
});

export default RepoSlice.reducer;
