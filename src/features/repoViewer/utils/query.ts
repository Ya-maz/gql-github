export const makeQueryTemplate = (
  searchQuery: string,
  paginationKeyword: string,
  paginationString: string
) => `
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
  search(type: REPOSITORY ${paginationKeyword}: 10, ${paginationString},
         query: "${searchQuery}") {
    edges {
      node {
        ... on Repository {
          id
          name
          stargazerCount
          url
          nameWithOwner
          description
          forkCount
          commitComments(last: 1) {
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
  repositoryCount
  }
}
`;
