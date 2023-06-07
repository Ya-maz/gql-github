import { useParams, useNavigate } from "react-router-dom";

import { Loading, Button } from "../../shared/UI";

import { useDetailData } from "./hooks";
import { Card } from "./components";

export const RepoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const owner = id?.split(".")?.[0];
  const name = id?.split(".")?.[1];

  const navigateHome = () => navigate("/");
  const { data, error, status } = useDetailData(owner, name);
  const repo = data?.data?.repository;
  return (
    <div  className="container">
      <Button onClick={navigateHome}>Home</Button>
      <div>
        {status === "loading" ? <Loading /> : null}
        {error ? <div>{error}</div> : null}
        {repo?.name && (
          <Card
            description={repo?.description}
            title={repo?.name}
            image={repo?.owner?.avatarUrl}
            forkCount={repo?.forkCount}
            stargazerCount={repo?.stargazerCount}
            languages={repo?.languages?.nodes}
          />
        )}
      </div>
    </div>
  );
};
