import fetcher from "@/utils/fetcher";
import { formatISO, isThisMonth, parseISO } from "date-fns";
import useSWR from "swr";
import { Box, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { Sunlight } from "@/styles/icons";
import MyResponsiveLine from "./GraphLine";
import AddLogModal from "./AddLogModal";

export default function Graph({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  let logs = data?.logs;

  logs = logs?.filter((log) => isThisMonth(parseISO(log.createdAt)));

  let dataWOO = [];
  for (let i = logs?.length - 1; i > -1; i--) {
    logs[i].createdAt = formatISO(parseISO(logs[i].createdAt), {
      representation: "date",
    });
    logs[i].height = parseInt(logs[i].height);
    dataWOO.push({
      x: logs[i].createdAt,
      y: logs[i].height,
      description: logs[i].description,
      type: logs[i].type,
    });
  }

  dataWOO.sort(function (a, b) {
    return a.x - b.x;
  });

  let testData2 = {
    id: plant.name,
    color: "hsl(100, 40%, 50%)",
    data: dataWOO,
  };

  let testData3 = [testData2];

  if (logs?.length) {
    return (
      <Box width="100%" height="100%">
        <MyResponsiveLine data={testData3} />
      </Box>
    );
  }

  if (logs) {
    return (
      <Box width="100%" height="100%">
        <Flex
          width="100%"
          justify="center"
          align="center"
          direction="column"
          p={16}
        >
          <Heading as="h2" size="md" mb="2">
            You haven't added any logs.
          </Heading>

          <Flex alignItems="center">
            <Text mr={4}>Start Tracking growth now</Text>
            <AddLogModal plant={plant} />
          </Flex>
        </Flex>
      </Box>
    );
  }
  return <Spinner></Spinner>;
}
