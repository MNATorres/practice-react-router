import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DataCharacter, getCharacters } from "../../services/apiCharacters";
import CardCharacter from "../../componets/CardCharacter";

export default function Characters() {
  const [dataCharacters, setDataCharacters] = useState<DataCharacter[]>();

  useEffect(() => {
    getCharacters()
      .then((data) => {
        if (data) {
          setDataCharacters(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box display={'flex'} flexDirection={'row'} flexWrap={'wrap'} w={'100%'} justifyContent={'center'}>
      {dataCharacters?.map((character) => {
        return (
          <Box m={2} key={character.id}>
            <CardCharacter
              title={character.name}
              specie={character.species}
              date={character.created}
              status={character.status}
              image={character.image}
              gender={character.gender}
              details={character.id}
            />
          </Box>
        );
      })}
    </Box>
  );
}
