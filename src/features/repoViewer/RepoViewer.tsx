import { useState, useEffect } from "react";

import { useDebounce } from "../../shared/hooks";
import { localS } from "../../shared/utils";
import { SearchBar, Loading, Button } from "../../shared/UI";

import { RepoTable } from "./components";
import { useSearch } from "./hooks";

export const RepoViewer = () => {
  const [searchQuery, setSearchQuery] = useState(localS.get() ?? "react");
  const [paginationKeyword, setPaginationKeyword] = useState("first");
  const [paginationString, setPaginationString] = useState("");
  const [startCursor, setStartCursor] = useState("");
  const [endCursor, setEndCursor] = useState("");
  const [hasPreviousPage, setPreviousPage] = useState(false);
  const [hasNextPage, setNextPage] = useState(false);

  const query = useDebounce(searchQuery);
  const { data, error, status } = useSearch(
    query,
    paginationKeyword,
    paginationString
  );
  const isSearchNotEmpty = data?.data?.search?.edges?.length > 0;
  const setPagination = (key: string, value: string, cursor: string) => () => {
    setPaginationKeyword(key);
    setPaginationString(value + ': "' + cursor + '"');
  };
  useEffect(() => {
    if (!data?.data?.search?.pageInfo) return;
    const pageInfo = data.data.search.pageInfo;
    setStartCursor(pageInfo.startCursor);
    setEndCursor(pageInfo.endCursor);
    setPreviousPage(pageInfo.hasPreviousPage);
    setNextPage(pageInfo.hasNextPage);
  }, [data]);

  return (
    <div className="container">
      <div style={{ margin: "0 0 20px" }}>
        <SearchBar query={searchQuery} change={setSearchQuery} />
      </div>
      {isSearchNotEmpty && (
        <div>
          <b>search result count: {data?.data?.search?.repositoryCount}</b>
        </div>
      )}

      <div style={{ margin: "0 0 20px" }}>
        {status === "loading" ? <Loading /> : null}
        {error ? <div>{error}</div> : null}
        {data?.data?.search?.edges?.length > 0 ? (
          <RepoTable edges={data?.data?.search?.edges} />
        ) : (
          <RepoTable edges={data?.data?.viewer?.edges} />
        )}
      </div>
      {hasPreviousPage && (
        <Button onClick={setPagination("last", "before", startCursor)}>
          Previous
        </Button>
      )}
      {hasNextPage && (
        <Button onClick={setPagination("first", "after", endCursor)}>
          Next
        </Button>
      )}
    </div>
  );
};
