const RepoItem = (props: any) => {
  console.log(
    typeof props.commitComments?.edges?.[0]?.node?.commit?.committedDate
  );
  return (
    <tr>
      <td>{props.nameWithOwner}</td>
      <td>{props.stargazerCount}</td>
      <td>{props.forkCount}</td>
      <td>{props.commitComments?.edges?.[0]?.node?.commit?.committedDate.slice(0,10)}</td>

      <td>
        <a className="App-link" href={props.url} target="_blank">
          {props.url}
        </a>
      </td>
    </tr>
  );
};

export const RepoList = ({ edges }: any) => {
  console.log("data propsRepoList", edges);
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
            <RepoItem key={repo.node.name + index} {...repo.node} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
