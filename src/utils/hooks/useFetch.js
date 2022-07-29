import { useState, useEffect, useCallback } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (fetchUrl) => {
    if (!fetchUrl) return;
    try {
      const res = await fetch(fetchUrl, {});
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  return { response, error };
};

export default useFetch;
