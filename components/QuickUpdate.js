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
  if (isToday(parseISO(plant.lastWatered))) {
    return (
      <Tooltip
        label="Already Watered Today"
        aria-label="A tooltip"
        bg="main.900"
        color="back.900"
      >
        <Tick boxSize={8} />
      </Tooltip>
    );
  }
  return (
    <>
      <Tooltip
        label="Water"
        aria-label="A tooltip"
        bg="main.900"
        color="back.900"
      >
        <Link
          onClick={() => {
            updatePlant(plant.id, {
              lastWatered: new Date().toISOString(),
              nextWater: addDays(new Date(), plant.water).toISOString(),
            });
          }}
        >
          <Water boxSize={8} />
        </Link>
      </Tooltip>
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
          <Tick boxSize={8} />
        </Tooltip>
      </>
    );
  }
  const nextFeed = addDays(parseISO(plant.lastFed), plant.feed);
  const tillNextFeed = formatDistanceToNow(nextFeed);
  return (
    <>
      <Tooltip
        label="Feed"
        aria-label="A tooltip"
        bg="main.900"
        color="back.900"
      >
        <Link
          onClick={() => {
            updatePlant(plant.id, {
              lastFed: new Date().toISOString(),
              nextFeed: addDays(new Date(), plant.feed).toISOString(),
            });
          }}
        >
          <Nutrition boxSize={8} />
        </Link>
      </Tooltip>
    </>
  );
}

export function WaterReminder({ plant }) {
  const tillNextWater = formatDistanceToNow(parseISO(plant.nextWater));
  return tillNextWater;
}

export function FeedReminder({ plant }) {
  const tillNextFeed = formatDistanceToNow(parseISO(plant.nextFeed));
  return tillNextFeed;
}
