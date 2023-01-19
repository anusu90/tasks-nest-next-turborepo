import { QueryOptions, useQuery } from "@tanstack/react-query";
import { client, useClient } from "./api-client";

const fetchBirds = async (authClient: typeof client): Promise<any> => {
  const url = "bird";
  return await authClient({ endpoint: url });
};

const useGetAllBirds = (options: QueryOptions = {}) => {
  const authClient = useClient();
  return useQuery({
    enabled: false,
    queryKey: ["bird"],
    queryFn: () => fetchBirds(authClient),
    networkMode: "online",
    cacheTime: 0,
    ...options,
  });
};

export { useGetAllBirds };
