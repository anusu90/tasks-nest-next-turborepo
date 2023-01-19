import { QueryOptions, useQuery } from "@tanstack/react-query";
import { client, useClient } from "./api-client";

const fetchAnimals = async (authClient: typeof client): Promise<any> => {
  const url = "animal";
  return await authClient({ endpoint: url });
};

const useGetAllAnimals = (options: QueryOptions = {}) => {
  const authClient = useClient();
  return useQuery({
    enabled: false,
    queryKey: ["animal"],
    queryFn: () => fetchAnimals(authClient),
    networkMode: "online",
    cacheTime: 0,
    ...options,
  });
};

export { useGetAllAnimals };
