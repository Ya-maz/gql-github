import { useState } from "react";

import { useDebounce } from "../../shared/hooks";
import { SearchBar, RepoList, Loading } from "../../shared/UI";

import { useSearch } from "./hooks";

export const RepoViewer = () => {
  const [searchQuery, setSearchQuery] = useState("react");
  const query = useDebounce(searchQuery);
  const { data, error, status } = useSearch(query);

  const style = {
    border: "1px solid #eee",
    margin: "20px",
    padding: "40px",
  };

  const blockStyle = {
    margin: "0 0 20px",
  };
  console.log("data", data);
  return (
    <div style={style}>
      <div style={blockStyle}>
        <SearchBar query={searchQuery} change={setSearchQuery} />
      </div>
      <div style={blockStyle}>
        {/*      {status === "loading" ? <Loading /> : null}
        {error ? <div>{error}</div> : null}
        {data?.search?.edges?.length > 0 ? (
          <RepoList repos={data?.search} />
        ) : (
          <RepoList repos={data?.viewer} />
        )}   */}
      </div>
    </div>
  );
};
