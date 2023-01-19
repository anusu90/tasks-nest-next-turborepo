import axios, { AxiosError, AxiosHeaders, AxiosRequestConfig } from "axios";
import type { AxiosRequestHeaders } from "axios";
import { getSession } from "next-auth/react";
import { NextAuthSession } from "@/model/next-auth";
import { useCallback } from "react";
type CRUD = "GET" | "POST" | "PUT";
interface ClientParamsModel {
  endpoint: string;
  method?: CRUD;
  isAuth?: boolean;
  isUrlAbsolute?: false;
}

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL ?? "";

const client = async <T = any>({
  endpoint,
  method,
  isUrlAbsolute,
  isAuth,
}: ClientParamsModel) => {
  const session = await getSession();
  const token = (session as NextAuthSession)?.idToken;
  const axiosConfig: Omit<AxiosRequestConfig, "headers"> & { headers: any } = {
    method: method ?? "GET",
    url: isUrlAbsolute ? endpoint : `${BASE_API_URL}/${endpoint}`,
    headers: {
      common: { authorization: isAuth && token ? `${token}` : "" },
    },
  };
  console.log("here", axiosConfig);
  try {
    const response = await axios<T>(axiosConfig);
    return response?.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

const useClient = (): typeof client => {
  return useCallback((config) => client({ ...config, isAuth: true }), []);
};

export { useClient, client };
