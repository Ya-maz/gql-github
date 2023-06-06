import { useParams, useNavigate } from "react-router-dom";

import { Loading } from "../../shared/UI";

import { useDetailData } from "./hooks";

export const RepoDetail = () => {
  const { id } = useParams();
  if (!id) return <></>;
  console.log("params", id);
  const navigate = useNavigate();
  const owner = id.split(".")[0];
  const name = id.split(".")[1];
  const style = {
    border: "1px solid #eee",
    margin: "20px",
    padding: "40px",
  };

  const blockStyle = {
    margin: "0 0 20px",
  };
  const navigateHome = () => navigate("/");
  const { data, error, status } = useDetailData(owner, name);
  console.log("detail data", data);
  return (
    <div style={style}>
      <button
        className="btn mx-1 btn-sm btn-primary bi bi-arrow-right"
        onClick={navigateHome}
      >
        Home
      </button>
      <div style={blockStyle}>
        {status === "loading" ? <Loading /> : null}
        {error ? <div>{error}</div> : null}
        Detail
      </div>
    </div>
  );
};
