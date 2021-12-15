import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqConfig, applyData) => {
  
    setError(null);

    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        headers: reqConfig.headers ? reqConfig.headers : {},
        body: reqConfig.body ? reqConfig.body : null,
      });
      if (!response.ok) {
        throw new Error("Request falied !");
      }

      const data = await response.json();
     await applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};

export default useHttp;
