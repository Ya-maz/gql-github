import { useState, useEffect } from "react";

import { STATUS, TSTATUS } from "../../../shared/models";
import { fetcher } from "../../../shared/utils";

import { makeQueryTemplate } from "../utils";

export const useDetailData = (
  owner: string | undefined,
  name: string | undefined
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const [status, setStatus] = useState<TSTATUS>(STATUS.IDLE);

  useEffect(() => {
    const refetch = async () => {
      try {
        if (!owner || !name) return;
        setStatus(STATUS.LOADING);
        const res = await fetcher(makeQueryTemplate(owner, name));
        setData(res);
        setError(null);
        setStatus(STATUS.SUCCESS);
      } catch (err) {
        setError(err);
        setStatus(STATUS.ERROR);
      }
    };
    refetch();
  }, [owner, name]);

  return { data, status, error };
};
