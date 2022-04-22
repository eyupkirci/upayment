import { useEffect, useState } from "react";
import { fetchList } from "../apiService";

export const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      const data = await fetchList(url);
      setData(data);
    })();
  }, []);
  return data;
};
