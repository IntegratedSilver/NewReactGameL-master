import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient('/genres')


export interface Genre {
  id: number;
  name: string;
  image_background: string

}


const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: CACHE_KEY_GENRES,
  queryFn: () => apiClient.getAll({}),
  staleTime: 24 * 60 * 60 * 1000 // 24hrs
  
})

export default useGenres;
