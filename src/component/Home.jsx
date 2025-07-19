import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepoApi } from "../Services/RepoApi";

function Home() {
  const dispatch = useDispatch();
  const resoapi = useSelector((state) => state.handle.data.repos_url);
  const { isLoading, isError, errormsg, data } = useSelector(
    (state) => state.handle
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <h1>Error: {errormsg}</h1>;
  }

  const navigate = useNavigate();
  const repoPage = () => {
    dispatch(fetchRepoApi(resoapi));
    navigate("/home/repo");
  };

  return (
    <div className="hero bg-base-200  relative top-20">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={data.avatar_url}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={data.login}
        />
        <div>
          <h1 className="text-5xl font-bold">{data.name || data.login}</h1>
          <p className="py-6">{data.bio || "No bio available"}</p>
          <button className="btn btn-primary " onClick={repoPage}>
            Repos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
