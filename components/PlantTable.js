import { Flex } from "@chakra-ui/react";
import {
  addDays,
  compareAsc,
  compareDesc,
  formatDistanceToNow,
  parseISO,
} from "date-fns";
import PlantRow from "./PlantRow";

export default function PlantTable({ plants }) {
  let list = plants;
  plants.sort(function (a, b) {
    return compareAsc(parseISO(a.nextWater), parseISO(b.nextWater));
  });

  return (
    <>
      <Flex flexDir="column">
        {plants.map((plant, i) => (
          <PlantRow plant={plant} key={plant.id} i={i} />
        ))}
      </Flex>
    </>
  );
}
