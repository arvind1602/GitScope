import { configureStore } from "@reduxjs/toolkit";
import HandleSlice from "../Services/HandleSlice";
import RepoSlice from "../Services/RepoApi"
const store = configureStore({
  reducer: {
    handle: HandleSlice,
    repoApi : RepoSlice
  }
});

export default store;