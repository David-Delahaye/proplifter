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
        px={[4, 8, 24, 40, 56]}
        m="auto"
        backgroundColor="back.900"
        minH="95vh"
      >
        {children}
      </Flex>
    </>
  );
}
