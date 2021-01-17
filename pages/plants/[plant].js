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
      <PageRow>
        <AspectRatio maxW="560px" ratio={1} flex="1">
          <Center>
            <PlantIcon icon={plant.icon} width="75%" height="75%" />
          </Center>
        </AspectRatio>
        <Flex flexDirection="column" width="100%" flex="1">
          <Flex direction={["row"]} w="100%">
            <Text width="50%">
              <QuickWater plant={plant} /> <WaterReminder plant={plant} />
            </Text>
            <Text>
              <QuickFeed plant={plant} /> <FeedReminder plant={plant} />
            </Text>
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
      <PageRow>
        <Box
          m={2}
          flex="1"
          height="50vh"
          backgroundColor="main.900"
          borderRadius={40}
          p={5}
          color="back.900"
        >
          <AddLogModal plant={plant} />
          <LogTable plant={plant} />
        </Box>
        <Box
          m={2}
          flex="1"
          height="50vh"
          backgroundColor="main.900"
          borderRadius={40}
          p={5}
          color="back.900"
        >
          <Graph plant={plant} />
        </Box>
      </PageRow>

      <PageRow></PageRow>
    </DashboardShell>
  );
}
