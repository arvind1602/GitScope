
import RepoCart from "./RepoCart";
import { useSelector } from "react-redux";

function Repo() {
  const state = useSelector((state) => state.repoApi);
  const data = state.data
  

  
  if (state.isLoading) {
    return <h1 className="text-center text-2xl text-gray-500">Loading</h1>;
  }
  if (state.isError) {
    return <h1 className="text-center text-2xl text-red-500">Error: {state.errormsg}</h1>;
  }
  if(!Array.isArray(data) || data.length === 0) {
    return <h1 className="text-center text-2xl text-red-500">No Repositories Found</h1>;
  }

  return (
    <>
      {Array.isArray(data) && data.map((repos) => <RepoCart key={repos.id} repodata={repos} />)}
    </>
  );
}

export default Repo;
