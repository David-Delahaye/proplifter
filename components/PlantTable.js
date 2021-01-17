import { Flex } from "@chakra-ui/react";
import PlantRow from "./PlantRow";

export default function PlantTable({ plants }) {
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
