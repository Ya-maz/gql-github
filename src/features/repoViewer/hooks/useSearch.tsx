import { useState, useEffect } from "react";

import { STATUS, TSTATUS } from "../../../shared/models";
import { fetcher, localS } from "../../../shared/utils";

import { makeQueryTemplate } from "../utils";

export const useSearch = (
  searchQuery: string,
  paginationKeyword: string,
  paginationString: string
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [status, setStatus] = useState<TSTATUS>(STATUS.IDLE);

  useEffect(() => {
    const research = async () => {
      try {
        setStatus(STATUS.LOADING);
        localS.set(searchQuery);
        const res = await fetcher(
          makeQueryTemplate(searchQuery, paginationKeyword, paginationString)
        );
        setData(res);
        setError(null);
        setStatus(STATUS.SUCCESS);
      } catch (err) {
        setError(err);
        setStatus(STATUS.ERROR);
      }
    };
    research();
  }, [searchQuery, paginationKeyword, paginationString]);

  return { data, status, error };
};
