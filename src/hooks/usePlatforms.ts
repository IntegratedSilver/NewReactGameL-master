import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORM } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000 // 24hrs
})



export default usePlatforms