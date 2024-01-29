import axios from "axios";

export interface DataEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export function getEpisodes(): Promise<DataEpisodes[]> {
  return new Promise((res, rej) => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        if (!response.data.results)
          throw new Error(`Falló el llamado para Episodes, ${response.status}`);
        const episodes = response.data.results;
        res(episodes);
      })
      .catch((error) => {
        console.error(error);
        rej(error);
      });
  });
}
