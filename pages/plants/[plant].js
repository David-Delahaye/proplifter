import AddLogModal from "@/components/AddLogModal";
import DashboardShell from "@/components/DashboardShell";
import PageRow from "@/components/PageRow";
import PlantIcon from "@/components/PlantIcon";
import PlantsHeader from "@/components/PlantsHeader";
import LogTable from "@/components/LogTable";
import {
  QuickFeed,
  QuickWater,
  WaterReminder,
  FeedReminder,
} from "@/components/QuickUpdate";
import { getAllPlants, getPlant } from "@/lib/db-admin";
import { Growth, Nutrition, Sunlight, Water } from "@/styles/icons";
import fetcher from "@/utils/fetcher";
import {
  AspectRatio,
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import useSWR from "swr";
import Graph from "@/components/Graph";

export async function getStaticPaths() {
  const { plants } = await getAllPlants();
  const paths = await plants.map((plant) => ({
    params: {
      plant: plant.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const plantId = context.params.plant;
  const { plant } = await getPlant(plantId);

  return {
    props: {
      plant,
    },
    revalidate: 1,
  };
}

export default function Profile({ plant }) {
  return (
    <DashboardShell>
      <PlantsHeader plant={plant} />
      <Flex justifyContent="space-between">
        <Stack direction="column">
          <Heading mb={4} fontSize="28px">
            Status
          </Heading>
          <Text mb={8}>
            All the data that you have noted on this plant so far
          </Text>
        </Stack>

        <Flex direction={["row"]} alignItems="center">
          <Text mr={4}>
            <QuickWater plant={plant} /> <WaterReminder plant={plant} />
          </Text>
          <Text mr={4}>
            <QuickFeed plant={plant} /> <FeedReminder plant={plant} />
          </Text>
          <Flex alignItems="center">
            <AddLogModal plant={plant} /> <Text ml={1}>Log</Text>
          </Flex>
        </Flex>
      </Flex>

      <PageRow mb={24} p={8} backgroundColor="back.900" borderRadius="20px">
        <Center flex="1">
          <PlantIcon icon={plant.icon} width="60%" height="60%" m={6} />
        </Center>
        <Flex
          flexDirection="column"
          width="100%"
          flex="1"
          justifyContent="flex-start"
        >
          <Stat flex="0" mb={8} size="sm">
            <StatNumber>
              {" "}
              {plant.name}
              <span style={{ fontWeight: "lighter" }}> - 15 days old</span>
            </StatNumber>
            <StatHelpText mb={0}>Golden Pothos</StatHelpText>
          </Stat>
          <Grid
            rowGap={8}
            maxW="100%"
            templateColumns={["repeat(1, 100%)", "repeat(2, 50%)"]}
          >
            <Flex flexDir="row" alignItems="center">
              <Sunlight boxSize={9} mr={1} />
              <Stat size="sm">
                <StatNumber>
                  <StatLabel fontWeight="normal" fontSize="14px">
                    Sunlight
                  </StatLabel>
                  {plant.sunlight || "N/A"}
                </StatNumber>
              </Stat>
            </Flex>

            <Flex flexDir="row" alignItems="center">
              <Nutrition boxSize={9} mr={1} />
              <Stat size="sm">
                <StatNumber>
                  <StatLabel fontWeight="normal" fontSize="14px">
                    Nutrition
                  </StatLabel>
                  {plant.feed || "N/A"} days
                </StatNumber>
              </Stat>
            </Flex>

            <Flex flexDir="row" alignItems="center">
              <Growth boxSize={9} mr={1} />
              <Stat size="sm">
                <StatNumber>
                  <StatLabel fontWeight="normal" fontSize="14px">
                    Growth
                  </StatLabel>
                  {plant.height || "N/A"} cm
                </StatNumber>
              </Stat>
            </Flex>

            <Flex flexDir="row" alignItems="center">
              <Water boxSize={9} mr={1} />
              <Stat size="sm">
                <StatNumber>
                  <StatLabel fontWeight="normal" fontSize="14px">
                    Water
                  </StatLabel>
                  {plant.water || "N/A"} days
                </StatNumber>
              </Stat>
            </Flex>
          </Grid>
        </Flex>
      </PageRow>
      <Heading mb={4} fontSize="28px">
        History
      </Heading>
      <Text mb={8}>All the data that you have noted on this plant so far</Text>
      <Tabs variant="ghost">
        <TabList ml={10}>
          <Tab
            _selected={{ borderBottom: "2px solid", borderColor: "main.900" }}
            _focus={{ shadow: "none" }}
          >
            List
          </Tab>
          <Tab
            _selected={{ borderBottom: "2px solid", borderColor: "main.900" }}
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
              <LogTable plant={plant} />
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
              <Graph plant={plant} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DashboardShell>
  );
}
