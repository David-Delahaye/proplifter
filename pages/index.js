import Nav from "@/components/Nav";
import PlantIcon from "@/components/PlantIcon";
import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import { Sunlight, Growth, Water, Nutrition } from "@/styles/icons";
import {
  Text,
  Heading,
  Box,
  Image,
  Flex,
  Grid,
  Center,
  Button,
} from "@chakra-ui/react";

Flex;
export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Nav />
      <Flex
        height="70vh"
        color="main.900"
        backgroundColor="back.900"
        position="relative"
      >
        <Flex
          height="100%"
          width="50%"
          p={8}
          flexDirection="column"
          justifyContent="center"
          bgGradient="linear(to-r, back.900, transparent)"
          mr={-8}
        >
          <Heading>Watch Your Plants Grow</Heading>
          <Text maxW="500px" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et.
          </Text>
          <Button
            backgroundColor="main.900"
            color="back.900"
            mt={4}
            maxW="fit-content"
            px={8}
          >
            Sign Up
          </Button>
        </Flex>
        <Center width="50%">
          <PlantIcon icon={1} width="50%" />
        </Center>
      </Flex>
      <Flex height="70vh" color="main.900" backgroundColor="back.900">
        <Flex
          height="100%"
          width="50%"
          padding={8}
          flexDirection="column"
          justifyContent="center"
        >
          <Heading>Track Variables</Heading>
          <Text maxW="500px" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et. Phasellus nec maximus
            odio, eu efficitur ante. Pellentesque commodo, lacus a rhoncus
            sagittis, velit urna aliquet velit, ac interdum ligula felis varius
            nunc.
          </Text>
          <Button
            backgroundColor="main.900"
            color="back.900"
            mt={4}
            maxW="fit-content"
            px={8}
          >
            Add your first plant
          </Button>
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" width="50%" gap={5} p={8}>
          <Center color="main.900" flexDir="column">
            <Sunlight width="64px" height="64px" />
            <Heading>Sunlight</Heading>
            <Text align="center" maxW="500px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit erat vel mi finibus fermentum.
            </Text>
          </Center>

          <Center color="main.900" flexDir="column">
            <Growth width="64px" height="64px" />
            <Heading>Size</Heading>
            <Text align="center" maxW="500px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit erat vel mi finibus fermentum.
            </Text>
          </Center>

          <Center color="main.900" flexDir="column">
            <Water width="64px" height="64px" />
            <Heading>Water</Heading>
            <Text align="center" maxW="500px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit erat vel mi finibus fermentum.
            </Text>
          </Center>

          <Center color="main.900" flexDir="column" p={8}>
            <Nutrition width="64px" height="64px" />
            <Heading>Nutrition</Heading>
            <Text align="center" maxW="500px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              blandit erat vel mi finibus fermentum.
            </Text>
          </Center>
        </Grid>
      </Flex>
      <Flex height="70vh" color="main.900" backgroundColor="back.900">
        <Grid templateColumns="repeat(2, 1fr)" width="50%">
          <Box w="100%" h="100%" bg="main.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="main.900" />
        </Grid>
        <Flex
          height="100%"
          width="50%"
          padding={8}
          flexDirection="column"
          justifyContent="center"
        >
          <Heading>Log your success</Heading>
          <Text mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et. Phasellus nec maximus
            odio, eu efficitur ante. Pellentesque commodo, lacus a rhoncus
            sagittis, velit urna aliquet velit, ac interdum ligula felis varius
            nunc.
          </Text>
          <Button
            backgroundColor="main.900"
            color="back.900"
            mt={4}
            maxW="fit-content"
            px={8}
          >
            Start taking notes
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
