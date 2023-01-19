import { Animal } from "@/model/animal";
import { QueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { client, useClient } from "./api-client";

const fetchAnimals = async (authClient: typeof client): Promise<Animal[]> => {
  const url = "animal";
  return await authClient({ endpoint: url });
};

const useGetAllAnimals = (
  options: QueryOptions<Animal[], AxiosError<Animal[]>> = {}
) => {
  const authClient = useClient();
  return useQuery<Animal[], AxiosError<Animal[]>>({
    enabled: false,
    queryKey: ["animal"],
    queryFn: () => fetchAnimals(authClient),
    networkMode: "online",
    cacheTime: 0,
    ...options,
  });
};

export { useGetAllAnimals };
