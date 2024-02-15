import { useState } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (options) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_DEV_SERVER}${url}`,
        options,
      );

      const jsonResult = await response.json();

      if (!response.ok) {
        setError(` Error! ${jsonResult ? jsonResult.msg : ''}`);
        throw new Error(
          `HTTP Error! Status: ${response.status} ${
            jsonResult ? jsonResult.msg : ''
          }`,
        );
      }

      setData(jsonResult);
      setError(null);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, isLoading, error, fetchData];
}

export default useFetch;
