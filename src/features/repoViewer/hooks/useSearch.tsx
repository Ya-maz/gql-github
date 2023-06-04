import { useState, useEffect } from "react";

import { STATUS, TSTATUS } from "../../../shared/models";
import { fetcher } from "../../../shared/utils";

import { makeQueryTemplate } from "../utils";

export const useSearch = (query: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [status, setStatus] = useState<TSTATUS>(STATUS.IDLE);

  const research = async (query: string) => {
    try {
      setStatus(STATUS.LOADING);
      const res = await fetcher(makeQueryTemplate(query));
      setData(res);
      setError(null);
      setStatus(STATUS.SUCCESS);
    } catch (err) {
      setError(err);
      setStatus(STATUS.ERROR);
    }
  };
  useEffect(() => {
    research(query);
  }, [query]);
  return { data, status, error, research };
};
