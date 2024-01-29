import { Box } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import Characters from "./characters/Characters";
import Episodes from "./episodes/Episodes";
import CharactersDetails from "./characters/CharactersDetails";

export default function RickAndMortyCharacters() {
  return (
    <Box sx={{ p: 10, bg: "blackAlpha.300"}} minH={'100vh'}>
      <Box bg={"blue.200"} p={10}>
        Soy el Home de Rick and Morty
        <UnorderedList>
          <ListItem>
            <Link to={"/characters"}>Characters</Link>
          </ListItem>
          <ListItem>
            <Link to={"/episodes"}>Episodes</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharactersDetails />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Box>
  );
}
