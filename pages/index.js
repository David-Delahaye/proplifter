import DashboardShell from "@/components/DashboardShell";
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
    <DashboardShell>
      <Flex
        color="main.900"
        backgroundColor="back.900"
        position="relative"
        flexDir={["column-reverse", "column-reverse", "row"]}
        mb={16}
        minH="40vh"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
        >
          <Heading maxW="500px">Watch Your Plants Grow</Heading>
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
            borderRadius={40}
          >
            Sign Up
          </Button>
        </Flex>
        <Center flex="1" display={["none", "none", "flex"]}>
          <PlantIcon icon={4} width={["50%", "50%", "100%"]} />
        </Center>
      </Flex>
      <Flex
        minH="70vh"
        color="main.900"
        backgroundColor="back.900"
        flexDir={["column", "column", "column", "row"]}
        mb={16}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          mb={8}
        >
          <Heading>Track Variables</Heading>
          <Text maxW="500px" mt={2} pr={8}>
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
            borderRadius={40}
          >
            Add your first plant
          </Button>
        </Flex>
        <Center flex="1" justifyContent="flex-start">
          <Grid
            templateColumns={[
              "repeat(1, 100%)",
              "repeat(1, 100%)",
              "repeat(2, 50%)",
            ]}
          >
            <Center
              color="main.900"
              flexDir="column"
              alignItems="flex-start"
              p={4}
            >
              <Heading mb={2}>
                <Sunlight width="32px" height="32px" /> - Light
              </Heading>
              <Text maxW="500px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit erat vel mi finibus fermentum.
              </Text>
            </Center>

            <Center
              color="main.900"
              flexDir="column"
              p={4}
              alignItems="flex-start"
            >
              <Heading mb={2}>
                <Growth width="32px" height="32px" /> - Size
              </Heading>
              <Text maxW="500px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit erat vel mi finibus fermentum.
              </Text>
            </Center>

            <Center
              color="main.900"
              flexDir="column"
              p={4}
              alignItems="flex-start"
            >
              <Heading mb={2}>
                <Water width="32px" height="32px" /> - Water
              </Heading>
              <Text maxW="500px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit erat vel mi finibus fermentum.
              </Text>
            </Center>

            <Center
              color="main.900"
              flexDir="column"
              p={4}
              alignItems="flex-start"
            >
              <Heading mb={2}>
                <Nutrition width="32px" height="32px" /> - Nutrition
              </Heading>
              <Text maxW="500px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit erat vel mi finibus fermentum.
              </Text>
            </Center>
          </Grid>
        </Center>
      </Flex>
      <Flex
        minH="70vh"
        color="main.900"
        backgroundColor="back.900"
        flexDir={["column-reverse", "column-reverse", "row"]}
      >
        <Center flex="1" mr={16}>
          <Box
            width="100%"
            height="30vh"
            backgroundColor="main.900"
            borderRadius={40}
            p={5}
            color="back.900"
          >
            Log notes here obviuosly salmonella
            <br />
            Log notes here obviuosly
            <br />
            Log notes here obviuosly beep
            <br />
            Log notes here obviuosly or not so obcioly
            <br />
          </Box>
        </Center>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          mb={8}
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
            borderRadius={40}
          >
            Start taking notes
          </Button>
        </Flex>
      </Flex>
    </DashboardShell>
  );
}
