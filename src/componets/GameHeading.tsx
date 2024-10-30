import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}:Props) => {

//Games
// Action Games
//Xbox Games
//Xbox Action Games

     const {data: genres} = useGenres();
     const genre = genres?.results.find((g) => g.id === gameQuery.genreId)

   const platform = usePlatform(gameQuery.genreId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  )
}

export default GameHeading
