import {
  CardBody,
  Heading,
  Stack,
  Text,
  Card,
  CardHeader,
  StackDivider,
  Box,
} from "@chakra-ui/react";

interface CardEpisodeProps {
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export default function CardEpisode({
  name,
  episode,
  air_date,
  created,
}: CardEpisodeProps) {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{name}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Es el Episodio: {episode}
            </Heading>
            <Text pt="2" fontSize="sm">
              Fecha: {air_date}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Creado
            </Heading>
            <Text pt="2" fontSize="sm">
              {created}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
