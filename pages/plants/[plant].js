import DashboardShell from "@/components/DashboardShell";
import PlantIcon from "@/components/PlantIcon";
import PlantsHeader from "@/components/PlantsHeader";
import { QuickFeed, QuickWater } from "@/components/QuickUpdate";
import { getAllPlants, getPlant } from "@/lib/db-admin";
import { Flex, Heading, Text } from "@chakra-ui/react";

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
      <Flex>
        <PlantIcon icon={plant.icon} />
        <Heading>{plant.name}</Heading>
        <Flex flexDirection="column">
          <QuickWater plant={plant} />
          <QuickFeed plant={plant} />
          <Text>height: {plant.height || "N/A"}</Text>
          <Text>feed schedule: {plant.feed || "N/A"}</Text>
          <Text>water schedule: {plant.water || "N/A"}</Text>
          <Text>sunlight Preference: {plant.sunlight || "N/A"}</Text>
        </Flex>
      </Flex>
    </DashboardShell>
  );
}
