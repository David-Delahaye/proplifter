import { updatePlant } from "@/lib/db";
import { Nutrition, Tick, Water } from "@/styles/icons";
import { Link, Text, Tooltip } from "@chakra-ui/react";
import {
  addDays,
  differenceInCalendarDays,
  formatDistance,
  formatDistanceToNow,
  isToday,
  parse,
  parseISO,
} from "date-fns";

export function QuickWater({ plant }) {
  const nextWater = addDays(parseISO(plant.lastWatered), plant.water);
  const tillNextWater = formatDistanceToNow(nextWater);
  if (isToday(parseISO(plant.lastWatered))) {
    return (
      <Tooltip
        label="Already Watered Today"
        aria-label="A tooltip"
        bg="main.900"
        color="back.900"
      >
        <Tick boxSize={12} />
      </Tooltip>
    );
  }
  return (
    <>
      <Link
        onClick={() => {
          updatePlant(plant.id, {
            lastWatered: new Date().toISOString(),
          });
        }}
      >
        <Water boxSize={12} />
      </Link>
    </>
  );
}

export function QuickFeed({ plant }) {
  if (isToday(parseISO(plant.lastFed))) {
    return (
      <>
        <Tooltip
          label="Already Fed Today"
          aria-label="A tooltip"
          bg="main.900"
          color="back.900"
        >
          <Tick boxSize={12} />
        </Tooltip>
      </>
    );
  }
  const nextFeed = addDays(parseISO(plant.lastFed), plant.feed);
  const tillNextFeed = formatDistanceToNow(nextFeed);
  return (
    <>
      <Link
        onClick={() => {
          updatePlant(plant.id, {
            lastFed: new Date().toISOString(),
          });
        }}
      >
        <Nutrition boxSize={12} />
      </Link>
    </>
  );
}
