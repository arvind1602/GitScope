import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepoApi } from "../Services/RepoApi";

function Navbar() {
  const state = useSelector((state) => state.handle);
  

  const dispatch = useDispatch();
  if (state.isLoading) {
    return <h1>Loading</h1>;
  }
  if (state.isError) {
    return <h1>Error: {state.errormsg}</h1>;
  }
  if (!state.data) {
    return <h1>Search for a user</h1>;
  }
  const repourl = state.data.repos_url;
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://imgs.search.brave.com/sJAa7yaGC6W3_vHZmAtNroBrLyQPq4ilp4CA02hVqXU/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdpdGh1Yi1pY29u/LWRvd25sb2FkLWlu/LXN2Zy1wbmctZ2lm/LWZpbGUtZm9ybWF0/cy0tbG9nby1zb2Np/YWwtbWVkaWEtdGVj/aG5vbG9neS1icmFu/ZC1pY29ub2dyYXBo/eS1wYWNrLWxvZ29z/LWljb25zLTEwOTE4/Nzk0LnBuZz9mPXdl/YnAmdz0xMjg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GitScope
            </span>
          </div>

          <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/home"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => {
                    dispatch(fetchRepoApi(repourl));
                  }}
                  to="/home/repo"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Repo
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
