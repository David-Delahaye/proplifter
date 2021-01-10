import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import fetcher from "@/utils/fetcher";
import next from "next";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import useSWR, { mutate } from "swr";
import AddPlantModal from "@/components/AddPlantModal";

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
          <li key={plant.id}>
            {plant.name} - {plant.height} -
            <NextLink href={`/plants/${plant.id}`}>
              <Link>See more</Link>
            </NextLink>
          </li>
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
