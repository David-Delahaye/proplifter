import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import fetcher from "@/utils/fetcher";
import next from "next";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import useSWR, { mutate } from "swr";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/plants", user.token] : null, fetcher);
  const plants = data?.plants;
  console.log(plants);

  if (plants?.length) {
    return (
      <>
        <h1>Dashboard</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newPlant = {
              name: e.target.name.value,
              height: e.target.height.value,
              authorId: user?.uid,
            };
            const { id } = createPlant(newPlant);

            mutate(
              ["/api/plants", user.token],
              async (data) => ({
                plants: [{ id, ...newPlant }, ...data.plants],
              }),
              false
            );
          }}
        >
          <input name="name" placeholder="name" />
          <input name="height" placeholder="12cm" />
          <button>Add a plant</button>
        </form>

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

  return <h1>Loading State</h1>;
}
