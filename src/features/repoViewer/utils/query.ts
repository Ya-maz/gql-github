export const makeQueryTemplate = (query: string) => `
{
  viewer {
    login
    repositories(first: 1) {
      totalCount
      edges {
        node {
          url
          pushedAt
          homepageUrl
        }
      }
    }
  }
  search(type: REPOSITORY, query: "${query}", first: 1) {
    edges {
      node {
        ... on Repository {
          id
          name
          stargazerCount
          url
          commitComments(first: 1) {
            edges {
              node {
                commit {
                  committedDate
                }
              }
            }
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
`;
