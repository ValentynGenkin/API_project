import { useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (options) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, options);

      const jsonResult = await response.json();

      if (!response.ok) {
        setError(
          `HTTP Error! Status: ${response.status} ${
            jsonResult ? jsonResult.msg : ''
          }`,
        );
        throw new Error(
          `HTTP Error! Status: ${response.status} ${
            jsonResult ? jsonResult.msg : ''
          }`,
        );
      }

      const data = await response.json();

      setData(data);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return [data, isLoading, error, fetchData];
}

export default useFetch;
