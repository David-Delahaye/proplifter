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
  const nextWater = addDays(parseISO(plant.lastWatered), plant.water);
  const tillNextWater = formatDistanceToNow(nextWater);

  return tillNextWater;
}

export function FeedReminder({ plant }) {
  const nextFeed = addDays(parseISO(plant.lastFed), plant.feed);
  const tillNextFeed = formatDistanceToNow(nextFeed);

  return tillNextFeed;
}
