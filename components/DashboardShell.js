import { Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import Nav from "./Nav";
import PlantsHeader from "./PlantsHeader";

export default function DashboardShell({ children }) {
  return (
    <>
      <Nav />
      <Flex
        flexDirection="column"
        p={8}
        backgroundColor="back.900"
        height="95vh"
      >
        {children}
      </Flex>
    </>
  );
}
