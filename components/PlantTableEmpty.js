import {
  Box,
  Flex,
  Skeleton,
  Table,
  Td,
  Text,
  Heading,
} from "@chakra-ui/react";
import AddPlantModal from "./AddPlantModal";

export default function PlantTableEmpty() {
  return (
    <>
      <Flex flexDirection="column">
        <Flex
          width="100%"
          justify="center"
          align="center"
          direction="column"
          borderRadius={8}
          backgroundColor="back.900"
          p={16}
        >
          <Heading as="h2" size="md" mb="2">
            You haven't added any plants.
          </Heading>

          <Flex alignItems="center">
            <Text mr={4}>Welcome, lets get started</Text>
            <AddPlantModal />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
