import {
  Box,
  Flex,
  Heading,
  Link,
  Stack,
  Table,
  Tbody,
  Text,
  Tr,
} from "@chakra-ui/react";
import PlantIcon from "./PlantIcon";
import NextLink from "next/link";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import addDays from "date-fns/addDays";
import { format, parseISO } from "date-fns";
import { updatePlant } from "@/lib/db";
import { QuickFeed, QuickWater } from "./QuickUpdate";

export default function PlantTable({ plants }) {
  return (
    <>
      <Flex flexDir="column">
        {plants.map((plant, i) => (
          <Flex
            key={plant.id}
            alignItems="center"
            justifyContent="space-between"
            p={4}
            backgroundColor={i % 2 === 0 ? "main.900" : "back.900"}
            color={i % 2 === 0 ? "back.900" : "main.900"}
          >
            <Flex alignItems="center">
              <PlantIcon icon={plant.icon} width="64px" height="64px" />
              <Flex flexDirection="column" ml={4}>
                <NextLink href={`/plants/${plant.id}`}>
                  <Link>
                    <Heading fontSize="26px">{plant.name}</Heading>
                  </Link>
                </NextLink>
                <Text>
                  water in{" "}
                  {differenceInCalendarDays(
                    addDays(parseISO(plant.lastWatered), plant.water),
                    parseISO(plant.lastWatered)
                  )}{" "}
                  days
                </Text>
                <Text>
                  feed in{" "}
                  {differenceInCalendarDays(
                    addDays(parseISO(plant.lastFed), plant.feed),
                    parseISO(plant.lastFed)
                  )}{" "}
                  days
                </Text>
              </Flex>
            </Flex>
            <Stack direction="row" gap={4}>
              <QuickWater plant={plant} />
              <QuickFeed plant={plant} />
            </Stack>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
