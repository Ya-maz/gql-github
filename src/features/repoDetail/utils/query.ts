export const makeQueryTemplate = (owner: string, name: string) => `
{
  repository(name: "${name}", owner: "${owner}") {
    description
    name
    stargazerCount
    forkCount
    owner {
      avatarUrl
      login
    }
    languages(first: 10) {
      nodes {
        color
        name
      }
    }
  }
}
`;
