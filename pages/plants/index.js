import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import fetcher from "@/utils/fetcher";
import next from "next";
import { Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import useSWR, { mutate } from "swr";
import AddPlantModal from "@/components/AddPlantModal";
import PlantIcon from "@/components/PlantIcon";
import PlantsHeader from "@/components/PlantsHeader";
import DashboardShell from "@/components/DashboardShell";
import PlantTable from "@/components/PlantTable";
import PlantTableLoad from "@/components/PlantTableLoad";
import PlantTableEmpty from "@/components/PlantTableEmpty";

export default function Dashboard() {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/plants", user.token] : null, fetcher);
  const plants = data?.plants;

  if (plants?.length) {
    return (
      <DashboardShell>
        <PlantsHeader />
        <PlantTable plants={plants} />
      </DashboardShell>
    );
  }

  if (plants)
    return (
      <>
        <DashboardShell>
          <PlantsHeader />
          <PlantTableEmpty />
        </DashboardShell>
      </>
    );

  return (
    <DashboardShell>
      <PlantsHeader />
      <PlantTableLoad />
    </DashboardShell>
  );
}
