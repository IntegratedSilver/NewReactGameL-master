import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./componets/NavBar";
import GameGrid from "./componets/GameGrid";
import GenreList from "./componets/GenreList";
import { useState } from "react";

import PlatformSelector from "./componets/PlatformSelector";
import SortSelector from "./componets/SortSelector";
import GameHeading from "./componets/GameHeading";
import { Platform } from "./hooks/usePlatforms";

//undefined: is absence of value;
// null: is an intetional absence of value;

 export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string

}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

 
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav' 'aside main'`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText}) } />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={1}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
          ></GenreList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId:platform.id})} />
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder})} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
