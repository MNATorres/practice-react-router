import { Box, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataCharacter, getCharacters } from "../../services/apiCharacters";

export default function CharactersDetails() {
  const { characterId } = useParams();
  const [dataCharcter, setDataCharacter] = useState<DataCharacter[]>();

  useEffect(() => {
    getCharacters()
      .then((data) => {
        if (data) {
          setDataCharacter(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const characterSelected = dataCharcter?.find(
    (character) => character.id === Number(characterId)
  );

  return (
    <Box>
      <Text as="b">Detalles de la Card seleccionada con id {characterId}</Text>
      <Text>{characterSelected?.name}</Text>
      <Image src={characterSelected?.image} alt={characterSelected?.name} />
      <Text>{characterSelected?.species}</Text>
      <Text>{characterSelected?.status}</Text>
      <Text>{characterSelected?.type}</Text>
      <Text>{characterSelected?.gender}</Text>
    </Box>
  );
}
