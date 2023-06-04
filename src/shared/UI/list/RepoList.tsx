const RepoItem = (props: any) => {
  return (
    <tr>
      <td>
        <a className="App-link" href={props.url} target="_blank">
          {props.name}
        </a>
      </td>
      <td>{props.stargazerCount}</td>
      <td>{props.commitComments?.edges?.[0]?.node?.commit?.committedDate}</td>
      <td></td>
    </tr>
  );
};

export const RepoList = (props: any) => {
  return (
    <div className="ReposList">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>🌟 stars</th>
            <th>🍴 forks</th>
            <th>[ссылка на Github]</th>
          </tr>
        </thead>
        <tbody>
          {props?.repos?.edges?.map((repo: any, index: number) => (
            <RepoItem key={repo.node.name + index} {...repo.node} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
