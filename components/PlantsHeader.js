import {
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Select,
  Text,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import AddPlantModal from "./AddPlantModal";

export default function PlantsHeader() {
  return (
    <>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Flex flexDirection="column">
          <Breadcrumb>
            <BreadcrumbItem>
              <NextLink href="/plants">Plants</NextLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex>
            <Heading mr={2}>All Plants</Heading>
            <AddPlantModal />
          </Flex>
        </Flex>
        <Flex flexDirection="row" alignItems="center">
          <Text minW="fit-content" fontSize="20px">
            Sort By
          </Text>
          <Select variant="ghost" size="md">
            <option>Water ^</option>
          </Select>
        </Flex>
      </Flex>
      <Divider borderColor="blackAlpha.500" my={4} />
    </>
  );
}
