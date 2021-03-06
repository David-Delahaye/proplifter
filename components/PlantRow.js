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
import {
  FeedReminder,
  QuickFeed,
  QuickWater,
  WaterReminder,
} from "./QuickUpdate";

export default function PlantRow({ plant, i }) {
  return (
    <Flex
      key={plant.id}
      alignItems="center"
      justifyContent="space-between"
      p={4}
      backgroundColor={i % 2 === 0 ? "back.900" : "back.800"}
      color="main.900"
    >
      <Flex alignItems="center">
        <PlantIcon icon={plant.icon} width="64px" height="64px" />
        <Flex flexDirection="column" ml={4}>
          <NextLink href={`/plants/${plant.id}`}>
            <Link>
              <Heading fontSize="26px" lineHeight="26px" mb={2}>
                {plant.name}
              </Heading>
            </Link>
          </NextLink>
          <Box lineHeight="16px" mb={1} display="inline">
            water in{" "}
            <Text fontWeight="bold" display="inline">
              <WaterReminder plant={plant} />
            </Text>
          </Box>
          <Box lineHeight="16px" display="inline">
            Feed in{" "}
            <Text fontWeight="bold" display="inline">
              <FeedReminder plant={plant} />
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Stack direction="row" gap={4}>
        <QuickWater plant={plant} />
        <QuickFeed plant={plant} />
      </Stack>
    </Flex>
  );
}
