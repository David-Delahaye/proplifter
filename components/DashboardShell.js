import { Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Nav from "./Nav";
import PlantsHeader from "./PlantsHeader";

export default function DashboardShell({ children }) {
  return (
    <>
      <Nav />
      <Box width="100vw" minH="100vh" bg="back.800">
        <Flex
          flexDirection="column"
          p={8}
          px={[4, 8, 24, 40, 56]}
          maxW="1400px"
          m="auto"
          minH="95vh"
        >
          {children}
        </Flex>
      </Box>
    </>
  );
}
