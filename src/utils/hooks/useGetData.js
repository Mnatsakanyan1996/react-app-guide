import { useState, useCallback, useEffect } from 'react';

import Fetch from 'utils/fetch';

const useGetData = (
  url,
  initialData,
) => {
  const [data, setData] = useState(initialData);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async newUrl => {
    if (!newUrl) return;
    setIsLoading(true);
    setHasError(false);

    const response = await Fetch.GET(newUrl);
    if (response.ok && !response.hasError) {
      setData(response.data);
    } else {
      setHasError(true);
    }

    setIsLoading(false);
    return response;
  }, []);

  useEffect(() => {
    fetchData(url);
  }, [fetchData, url]);

  return { data, fetchData, isLoading, setData, hasError };
};

export default useGetData;
