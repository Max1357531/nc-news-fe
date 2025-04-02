import { useEffect, useState } from "react";

export const useData = (fetchFunc, ...args) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false)
    fetchFunc(...args).then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch(()=>{
        setError(true)
        setLoading(false)
    })
  },[...args]);
  return {data,loading,error}
};
