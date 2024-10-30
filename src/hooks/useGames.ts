import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME } from "../constants";
import { Platform } from "./usePlatforms";
import { all } from "axios";



const apiClient = new APIClient('/games')


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>

  useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: [CACHE_KEY_GAME,gameQuery],
    queryFn: ({pageParam = 1}) => 
              apiClient
                  .getAll({
                    params:{
                              genres:gameQuery.genreId, 
                              parent_platforms:gameQuery.platformId,
                              ordering:gameQuery.sortOrder,
                              search:gameQuery.searchText,page: pageParam
                          }
                  }),
                  getNextPageParam: (lastPage, allPages) => {
                    return lastPage.next ? allPages.length + 1: undefined;
                  },
                  staleTime: 24 * 60 * 60 * 1000 //24hrs
    
  });
 

export default useGames;
