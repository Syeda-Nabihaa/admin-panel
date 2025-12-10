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
      const msgData = err.response?.data?.message;
      console.log("errrr" , err)
      console.log("errorrrrrrrrr",err.response?.data?.data?.message)
      console.log("errorrrrrrrrr",err.response?.message)
      const msg = Array.isArray(msgData)
        ? msgData[0]
        : msgData || "Something went wrong";

      setError({
        type: "error",
        text: msg,
      });

      return null;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
