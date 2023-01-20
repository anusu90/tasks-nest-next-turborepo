import { AxiosRequestConfig } from "axios";

export type UpdatedAxiosRequestConfig = Omit<AxiosRequestConfig, "headers"> & {
  headers: any;
};
