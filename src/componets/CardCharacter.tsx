import {
  CardBody,
  Heading,
  Stack,
  Text,
  Card,
  Image,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface CardPros {
  title: string;
  specie: string;
  date: string;
  status: string;
  image: string;
  gender: string;
  details: number
}

export default function CardCharacter({
  title,
  specie,
  date,
  status,
  image,
  gender,
  details
}: CardPros) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{specie}</Text>
          <Text color="blue.600" fontSize="2xl">
            {date}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {gender}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            {status}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/characters/${details}`}>Ver mas</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
