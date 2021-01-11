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
          <Heading>All Plants</Heading>
        </Flex>
        <Flex flexDirection="row" alignItems="flex-end">
          <Text minW="fit-content" mr={2} fontSize="20px">
            Sort By
          </Text>
          <Select variant="outline" size="md">
            <option>Water ^</option>
          </Select>
        </Flex>
      </Flex>
      <Divider borderColor="blackAlpha.500" />
    </>
  );
}
