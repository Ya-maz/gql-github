import { useNavigate } from "react-router-dom";

const RepoItem = (props: any) => {
  return (
    <tr>
      <td onClick={props.navigate(props.nameWithOwner.replace("/", "."))}>
        {props.nameWithOwner}
      </td>
      <td>{props.stargazerCount}</td>
      <td>{props.forkCount}</td>
      <td>
        {props.commitComments?.edges?.[0]?.node?.commit?.committedDate.slice(
          0,
          10
        )}
      </td>

      <td>
        <a className="App-link" href={props.url} target="_blank">
          {props.url}
        </a>
      </td>
    </tr>
  );
};

export const RepoList = ({ edges }: any) => {
  const navigate = useNavigate();
  const navigateToDetail = (id: string) => () => navigate(id);
  return (
    <div className="ReposList">
      <table>
        <thead>
          <tr>
            <th>name/url</th>
            <th>🌟 stars</th>
            <th>🍴 forks</th>
            <th>[Last commit date]</th>
            <th>url</th>
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
