import { useState, useCallback } from 'react';

import Fetch from 'utils/fetch';

const useFetch = (
  url,
  initialData,
  method = 'POST'
) => {
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResponse = useCallback(newData => {
    setIsLoading(false);
    return newData;
  }, []);

  const fetchData = useCallback(async data => {
    if (!url) return;
    setIsLoading(true);
    setHasError(false);

    const response = await Fetch[method](url, data);
    if (response.ok && !response.hasError) {
      setData(response.data);
      return handleResponse(response.data);
    } else {
      setHasError(true);
      return handleResponse(null);
    }
  }, [handleResponse, method, url]);

  return { data, fetchData, isLoading, setData, hasError };
};

export default useFetch;
