import { useEffect } from "react";

import axios from "axios";

const UseAxioxFetch = () => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
  });

  //   Interceptors
  useEffect(() => {
    // request Interceptors
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [axiosInstance]);

  return axiosInstance;
};

export default UseAxioxFetch;
