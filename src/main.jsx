import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Search from "./pages/Search.jsx";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import Repo from "./component/Repo.jsx";
import { Provider } from 'react-redux'
import store from "../src/store/Store.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Search />} />
      <Route path="home" element={<Navbar />}>
        <Route path="" element={<Home />} />
        <Route path="repo" element={<Repo />} />
      </Route>
      /
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
      <RouterProvider router={router}/>
    </Provider>
    
  </StrictMode>
);
