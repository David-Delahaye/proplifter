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
          <Stat flex="0" mb={2} size="sm">
            <StatNumber> {plant.name}</StatNumber>
            <StatHelpText>Golden Pothos</StatHelpText>
          </Stat>
          <Grid
            rowGap={8}
            maxW="100%"
            templateColumns={["repeat(1, 100%)", "repeat(2, 50%)"]}
          >
            <Stat size="sm">
              <StatLabel fontWeight="normal"></StatLabel>
              <StatNumber>
                <Growth width="16px" height="16px" mr={1} />{" "}
                {plant.height || "N/A"}cm
              </StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>

            <Stat size="sm">
              <StatLabel fontWeight="normal"></StatLabel>
              <StatNumber>
                {" "}
                <Sunlight width="16px" height="16px" mr={1} />
                {plant.sunlight || "N/A"}
              </StatNumber>
            </Stat>

            <Stat size="sm">
              <StatLabel fontWeight="normal"></StatLabel>
              <StatNumber>
                <Nutrition width="16px" height="16px" mr={1} />{" "}
                {plant.feed || "N/A"} days
              </StatNumber>
            </Stat>

            <Stat size="sm">
              <StatLabel fontWeight="normal">WATER</StatLabel>
              <StatNumber>
                <Water width="16px" height="16px" mr={1} />{" "}
                {plant.water || "N/A"} days
              </StatNumber>
            </Stat>
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
