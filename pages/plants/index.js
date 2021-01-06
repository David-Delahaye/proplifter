import { useAuth } from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/plants", user.token] : null, fetcher);
  const plants = data?.plants;
  console.log(plants);

  if (plants?.length) {
    return (
      <>
        <h1>Dashboard</h1>
        {plants.map((plant) => (
          <li key={plant.id}>
            {plant.name} - {plant.height}
          </li>
        ))}
      </>
    );
  }

  return <h1>Loading State</h1>;
}
