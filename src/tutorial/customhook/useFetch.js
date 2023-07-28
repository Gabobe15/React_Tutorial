import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setIsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const response = await resp.json();
        setIsData(response);
      } catch (error) {
        setIsError(true);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetch
