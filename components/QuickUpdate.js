import { updatePlant } from "@/lib/db";
import { Link, Text } from "@chakra-ui/react";
import { isToday, parseISO } from "date-fns";

export function QuickWater({ plant }) {
  if (isToday(parseISO(plant.lastWatered))) return <Text>Ticked</Text>;
  return (
    <>
      <Link
        onClick={() => {
          updatePlant(plant.id, {
            lastWatered: new Date().toISOString(),
          });
        }}
      >
        Water
      </Link>
    </>
  );
}

export function QuickFeed({ plant }) {
  if (isToday(parseISO(plant.lastFed))) return <Text>Ticked</Text>;
  return (
    <>
      <Link
        onClick={() => {
          updatePlant(plant.id, {
            lastFed: new Date().toISOString(),
          });
        }}
      >
        Feed
      </Link>
    </>
  );
}
