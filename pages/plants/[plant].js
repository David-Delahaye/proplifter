import DashboardShell from "@/components/DashboardShell";
import PlantIcon from "@/components/PlantIcon";
import PlantsHeader from "@/components/PlantsHeader";
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
      <PlantsHeader />
      <Flex>
        <PlantIcon icon={plant.icon} />
        <Heading>{plant.name}</Heading>
        <Flex flexDirection="column">
          <Text>height: {plant.height}</Text>
          <Text>water schedule: {plant.water}</Text>
          <Text>sunlight Preference: {plant.sunlight}</Text>
        </Flex>
      </Flex>
    </DashboardShell>
  );
}
