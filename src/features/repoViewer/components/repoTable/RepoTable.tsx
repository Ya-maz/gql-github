import { useNavigate } from "react-router-dom";

import "./RepoTable.css";

const RepoItem = (props: any) => {
  return (
    <tr className="table__row">
      <td
        className="table__cell a"
        onClick={props.navigate(props.nameWithOwner.replace("/", "."))}
      >
        {props.nameWithOwner}
      </td>
      <td className="table__cell">{props.stargazerCount}</td>
      <td className="table__cell">{props.forkCount}</td>
      <td className="table__cell">
        {props.commitComments?.edges?.[0]?.node?.commit?.committedDate.slice(
          0,
          10
        )}
      </td>

      <td className="table__cell">
        <a href={props.url} target="_blank">
          {props.url}
        </a>
      </td>
    </tr>
  );
};

export const RepoTable = ({ edges }: any) => {
  const navigate = useNavigate();
  const navigateToDetail = (id: string) => () => navigate(id);
  return (
    <div className="reposList">
      <table className="table">
        <thead className="table__header">
          <tr className="table__row">
            <th className="table__cell">name/url</th>
            <th className="table__cell">🌟 stars</th>
            <th className="table__cell">🍴 forks</th>
            <th className="table__cell">[Last commit date]</th>
            <th className="table__cell">url</th>
          </tr>
        </thead>
        <tbody>
          {edges?.map((repo: any, index: number) => (
            <RepoItem
              key={repo.node.name + index}
              {...repo.node}
              navigate={navigateToDetail}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
