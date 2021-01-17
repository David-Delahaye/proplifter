import fetcher from "@/utils/fetcher";
import { formatISO, parseISO } from "date-fns";
import useSWR from "swr";
import { Box } from "@chakra-ui/react";
import { Sunlight } from "@/styles/icons";
import MyResponsiveLine from "./GraphLine";

export default function Graph({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  let logs = data?.logs;
  let dataWOO = [];
  for (let i = logs?.length - 1; i > -1; i--) {
    logs[i].createdAt = formatISO(parseISO(logs[i].createdAt), {
      representation: "date",
    });
    //= getHours(parseISO(logs[i].createdAt));
    logs[i].height = parseInt(logs[i].height);
    dataWOO.push({
      x: logs[i].createdAt,
      y: logs[i].height,
      another: logs[i].description,
    });
  }

  dataWOO.sort(function (a, b) {
    return a.y - b.y;
  });

  let testData2 = {
    id: plant.name,
    color: "hsl(100, 40%, 50%)",
    data: dataWOO,
  };

  let testData3 = [testData2];

  if (logs?.length) {
    return (
      <Box width="100%" height="100%" bg="main.900" color="back.900">
        <MyResponsiveLine data={testData3} />
      </Box>
    );
  }
  return "loading";
}