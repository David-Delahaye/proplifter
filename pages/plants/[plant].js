import DashboardShell from "@/components/DashboardShell";
import PageRow from "@/components/PageRow";
import PlantIcon from "@/components/PlantIcon";
import PlantsHeader from "@/components/PlantsHeader";
import { QuickFeed, QuickWater } from "@/components/QuickUpdate";
import { getAllPlants, getPlant } from "@/lib/db-admin";
import { Growth, Nutrition, Sunlight, Water } from "@/styles/icons";
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
          <Stack direction={["row"]} justifyContent="space-around" w="100%">
            <QuickWater plant={plant} />
            <QuickFeed plant={plant} />
          </Stack>
          <Divider borderColor="blackAlpha.500" my={4} />
          <Grid
            maxW="100%"
            gap={12}
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
      </PageRow>

      <PageRow>
        <Box
          width="100%"
          height="30vh"
          backgroundColor="main.900"
          borderRadius={40}
          p={5}
          color="back.900"
        >
          Graph
        </Box>
      </PageRow>
    </DashboardShell>
  );
}
