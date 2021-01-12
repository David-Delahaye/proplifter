import { Box, Flex, Heading, Link, Table, Text } from "@chakra-ui/react";
import PlantIcon from "./PlantIcon";
import NextLink from "next/link";

export default function PlantTable({ plants }) {
  return (
    <Table>
      {plants.map((plant, i) => (
        <Flex
          key={plant.id}
          alignItems="center"
          justifyContent="space-between"
          key={i}
          p={4}
          backgroundColor={i % 2 === 0 ? "main.900" : "back.900"}
          color={i % 2 === 0 ? "back.900" : "main.900"}
        >
          <Flex alignItems="center">
            <PlantIcon icon={plant.icon} width="64px" height="64px" />
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
