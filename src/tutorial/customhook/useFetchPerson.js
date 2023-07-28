import { useEffect, useState } from "react";

const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setIsUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setIsUser(user);
      } catch (error) {
        setIsError(true);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, isError, user };
};

export default useFetchPerson;
