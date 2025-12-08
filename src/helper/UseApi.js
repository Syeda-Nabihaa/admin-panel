import { useState } from "react";

export const useApi = (service) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (method, ...params) => {
    setLoading(true);
    setError(null);

    try {
      const res = await service[method](...params);
      return res.data;
    } catch (err) {
      setError(err.message);
      console.log("API Error:", err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
