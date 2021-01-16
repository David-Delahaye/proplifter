import fetcher from "@/utils/fetcher";
import { Flex, Text } from "@chakra-ui/react";
import useSWR from "swr";

export default function LogTable({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  const logs = data?.logs;
  console.log(logs);

  if (logs?.length) {
    return (
      <>
        <Flex flexDir="column">
          {logs.map((log, i) => (
            <Flex key={log.id} justifyContent="space-between">
              <Text>{log.type}</Text>
              <Text noOfLines={4} isTruncated width="300px">
                {log.description}
              </Text>
              <Text>{log.createdAt}</Text>
            </Flex>
          ))}
        </Flex>
      </>
    );
  }
  return "loading";
}
