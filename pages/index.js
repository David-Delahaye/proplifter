import DashboardShell from "@/components/DashboardShell";
import Graph from "@/components/Graph";
import LogTable from "@/components/LogTable";
import Nav from "@/components/Nav";
import PageRow from "@/components/PageRow";
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
  Spacer,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

Flex;
export default function Home() {
  const auth = useAuth();

  return (
    <DashboardShell>
      <PageRow>
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
        <Center flex="1" display={["none", "none", "none", "flex"]}>
          <PlantIcon icon={4} width={["50%", "50%", "100%"]} />
        </Center>
      </PageRow>
      <PageRow>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          mb={8}
          mr={[0, 0, 8]}
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
              <Heading mb={2} fontSize="20px">
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
              <Heading mb={2} fontSize="20px">
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
              <Heading mb={2} fontSize="20px">
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
              <Heading mb={2} fontSize="20px">
                <Nutrition width="32px" height="32px" /> - Nutrition
              </Heading>
              <Text maxW="500px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                blandit erat vel mi finibus fermentum.
              </Text>
            </Center>
          </Grid>
        </Center>
      </PageRow>
      <PageRow>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          flex="1"
          mb={8}
          mr={[0, 0, 8]}
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

        <Tabs variant="ghost" flex="1">
          <TabList ml={10}>
            <Tab
              _selected={{
                borderBottom: "2px solid",
                borderColor: "main.900",
              }}
              _focus={{ shadow: "none" }}
            >
              List
            </Tab>
            <Tab
              _selected={{
                borderBottom: "2px solid",
                borderColor: "main.900",
              }}
              _focus={{ shadow: "none" }}
            >
              Graph
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <Box
                flex="1"
                minHeight="50vh"
                backgroundColor="back.900"
                borderRadius={20}
                mb={8}
                p={5}
                color="main.900"
              >
                <LogTable plant={{ id: "GkpJqDJBIGocv4uZkX87" }} />
              </Box>
            </TabPanel>
            <TabPanel p={0}>
              <Box
                flex="1"
                height="50vh"
                backgroundColor="back.900"
                borderRadius={20}
                p={5}
                color="main.900"
              >
                <Graph plant={{ id: "GkpJqDJBIGocv4uZkX87" }} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </PageRow>
    </DashboardShell>
  );
}
