import { Box, Flex, Heading, Link, Table, Text } from "@chakra-ui/react";
import PlantIcon from "./PlantIcon";
import NextLink from "next/link";

export default function PlantTable({ plants }) {
  return (
    <Table>
      {plants.map((plant) => (
        <Flex
          key={plant.id}
          alignItems="center"
          justifyContent="space-between"
          m={2}
        >
          <Flex alignItems="center">
            <PlantIcon icon={plant.icon} />
            <Flex flexDirection="column" ml={4}>
              <Heading fontSize="26px">{plant.name}</Heading>
              <Text>water in {plant.water} days</Text>
            </Flex>
          </Flex>
          <NextLink href={`/plants/${plant.id}`}>
            <Link>See more</Link>
          </NextLink>
        </Flex>
      ))}
      ;
    </Table>
  );
}
