import { URL } from "../constants";

//in .env
//VITE_REACT_APP_GITHUB_TOKEN=your_token
//console.log(import.meta.env.VITE_REACT_APP_GITHUB_TOKEN); // your_token

export const fetcher = async (query: any, url = URL) =>
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }).then((res) => res.json());
