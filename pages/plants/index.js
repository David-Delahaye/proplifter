import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import fetcher from "@/utils/fetcher";
import next from "next";
import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import useSWR, { mutate } from "swr";
import AddPlantModal from "@/components/AddPlantModal";
import PlantIcon from "@/components/PlantIcon";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/plants", user.token] : null, fetcher);
  const plants = data?.plants;

  if (plants?.length) {
    return (
      <>
        <h1>Dashboard</h1>
        <AddPlantModal />
        {plants.map((plant) => (
          <Flex key={plant.id} alignItems="center" m={2}>
            <PlantIcon icon={plant.icon} />
            <Text>{plant.name}</Text>
            <NextLink href={`/plants/${plant.id}`}>
              <Link>See more</Link>
            </NextLink>
          </Flex>
        ))}
      </>
    );
  }

  if (plants)
    return (
      <>
        <AddPlantModal />
        'EMPTY STATE'
      </>
    );

  return <h1>Loading State</h1>;
}
