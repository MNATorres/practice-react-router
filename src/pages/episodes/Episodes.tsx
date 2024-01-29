import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DataEpisodes, getEpisodes } from "../../services/apiEpisodes";
import CardEpisode from "../../componets/CardEpisode";

export default function Episodes() {
  const [dataEpisodes, setDataEpisodes] = useState<DataEpisodes[]>();

  useEffect(() => {
    getEpisodes()
      .then((data) => {
        if (data) {
          setDataEpisodes(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      flexWrap={"wrap"}
      w={"100%"}
      justifyContent={"center"}
    >
      {dataEpisodes?.map((episode) => {
        return (
          <Box m={2} key={episode.id} cursor={'pointer'}>
            <CardEpisode
              name={episode.name}
              episode={episode.episode}
              air_date={episode.air_date}
              created={episode.created}
            />
          </Box>
        );
      })}
    </Box>
  );
}
