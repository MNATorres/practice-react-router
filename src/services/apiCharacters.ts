import axios from "axios";

export interface DataCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export function getCharacters(): Promise<DataCharacter[]> {
  return new Promise((resolve, reject) => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.data.results)
          throw new Error(`Error llamandano characters, ${response.status}`);
        const characters: DataCharacter[] = response.data.results;
        resolve(characters);
      })
      .catch((error) => {
        reject(error);
        console.error(error);
      });
  });
}
