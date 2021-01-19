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
      <PageRow mb={24} p={8} backgroundColor="back.900" borderRadius="40px">
        <AspectRatio maxW="560px" ratio={1} flex="1">
          <Center>
            <PlantIcon icon={plant.icon} width="75%" height="75%" />
          </Center>
        </AspectRatio>
        <Flex flexDirection="column" width="100%" flex="1">
          <Flex direction={["row"]} w="100%">
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
          <Divider borderColor="blackAlpha.500" my={4} />
          <Grid
            rowGap={8}
            maxW="100%"
            templateColumns={["repeat(1, 100%)", "repeat(2, 50%)"]}
          >
            <Stat>
              <StatLabel>
                <Growth width="16px" height="16px" mr={1} />
                Height
              </StatLabel>
              <StatNumber> {plant.height || "N/A"}cm</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>
                <Sunlight width="16px" height="16px" mr={1} />
                Sunlight preference
              </StatLabel>
              <StatNumber> {plant.sunlight || "N/A"}</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>
                <Nutrition width="16px" height="16px" mr={1} />
                Feed Interval
              </StatLabel>
              <StatNumber> {plant.feed || "N/A"} days</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>
                <Water width="16px" height="16px" mr={1} />
                Water Interval
              </StatLabel>
              <StatNumber> {plant.water || "N/A"} days</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Grid>
        </Flex>
      </PageRow>
      <Heading mb={4}> History</Heading>
      <Text mb={8}>All the data that you have noted on this plant so far</Text>
      <Tabs>
        <TabList ml={10}>
          <Tab>List</Tab>
          <Tab>Graph</Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <Box
              flex="1"
              minHeight="20vh"
              backgroundColor="back.900"
              borderRadius={40}
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
              borderRadius={40}
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
