import { Bird } from "@/model/bird";
import { QueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { client, useClient } from "./api-client";

const fetchBirds = async (authClient: typeof client): Promise<Bird[]> => {
  const url = "bird";
  return await authClient({ endpoint: url });
};

const useGetAllBirds = (
  options: QueryOptions<Bird[], AxiosError<Bird[]>> = {}
) => {
  const authClient = useClient();
  return useQuery<Bird[], AxiosError<Bird[]>>({
    queryKey: ["bird"],
    queryFn: () => fetchBirds(authClient),
    networkMode: "online",
    cacheTime: 0,
    enabled: false,
    ...options,
  });
};

export { useGetAllBirds };
