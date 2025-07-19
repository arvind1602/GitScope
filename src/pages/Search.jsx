import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../Services/HandleSlice";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 2. Get navigate function
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="text-center mt-12">
        <h1 className="text-4xl font-bold text-blue-700">GitScope</h1>
        <p className="mt-2 text-gray-600 text-lg">
          🔍 Enter a GitHub username to explore their profile, repositories, and
          contributions.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchApi(username));
          navigate("/home"); // 3. Navigate after dispatch
        }}
      >
        <div className="flex flex-wrap gap-y-3 justify-center relative top-10">
          <label className="input">
            <input
              type="search"
              required
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <button
            className="btn btn-soft btn-primary mx-2.5 w-28"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
