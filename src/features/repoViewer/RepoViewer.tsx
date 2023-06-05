import { useState, useEffect } from "react";

import { useDebounce } from "../../shared/hooks";
import { SearchBar, RepoList, Loading } from "../../shared/UI";

import { useSearch } from "./hooks";

export const RepoViewer = () => {
  const [searchQuery, setSearchQuery] = useState("react");
  const query = useDebounce(searchQuery);

  const [paginationKeyword, setPaginationKeyword] = useState("first");
  const [paginationString, setPaginationString] = useState("");
  const [startCursor, setStartCursor] = useState("");
  const [endCursor, setEndCursor] = useState("");
  const [hasPreviousPage, setPreviousPage] = useState(false);
  const [hasNextPage, setNextPage] = useState(false);

  const { data, error, status } = useSearch(
    query,
    paginationKeyword,
    paginationString
  );

  const style = {
    border: "1px solid #eee",
    margin: "20px",
    padding: "40px",
  };

  const blockStyle = {
    margin: "0 0 20px",
  };

  const isSearchNotResultEmpty = data?.data?.search?.edges?.length > 0;
  console.log("data", data?.data);
  useEffect(() => {
    if (!data?.data?.search?.pageInfo) return;
    const pageInfo = data.data.search.pageInfo;
    setStartCursor(pageInfo.startCursor);
    setEndCursor(pageInfo.endCursor);
    setPreviousPage(pageInfo.hasPreviousPage);
    setNextPage(pageInfo.hasNextPage);
  }, [data]);

  return (
    <div style={style}>
      <div style={blockStyle}>
        <SearchBar query={searchQuery} change={setSearchQuery} />
      </div>
      {isSearchNotResultEmpty && (
        <div>
          <b className="me-2 text-secondary">
            search result count: {data?.data?.search?.repositoryCount}
          </b>
        </div>
      )}

      <div style={blockStyle}>
        {status === "loading" ? <Loading /> : null}
        {error ? <div>{error}</div> : null}
        {data?.data?.search?.edges?.length > 0 ? (
          <RepoList edges={data?.data?.search?.edges} />
        ) : (
          <RepoList edges={data?.data?.viewer?.edges} />
        )}
      </div>
      <div className="d-flex justify-content-center my-2">
        {hasPreviousPage && (
          <button
            className="btn mx-1 btn-sm btn-primary bi bi-arrow-left"
            onClick={() => {
              setPaginationKeyword("last");
              setPaginationString('before: "' + startCursor + '"');
            }}
          >
            Previous
          </button>
        )}
        {hasNextPage && (
          <button
            className="btn mx-1 btn-sm btn-primary bi bi-arrow-right"
            onClick={() => {
              setPaginationKeyword("first");
              setPaginationString('after: "' + endCursor + '" ');
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
