import { Growth, Nutrition, Sunlight, Water } from "@/styles/icons";
import fetcher from "@/utils/fetcher";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Skeleton,
  Text,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react";
import { compareDesc, format, parseISO } from "date-fns";
import useSWR from "swr";
import AddLogModal from "./AddLogModal";

export default function LogTable({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  const logs = data?.logs;

  logs?.sort(function (a, b) {
    return compareDesc(parseISO(a.createdAt), parseISO(b.createdAt));
  });

  if (logs?.length) {
    return (
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Type</Th>
            <Th>Description</Th>
            <Th>Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {logs.map((log, i) => (
            <Tr key={log.id}>
              <Td>
                {" "}
                {log.type === "sunlight" && <Sunlight boxSize={8} />}
                {log.type === "growth" && <Growth boxSize={8} />}
                {log.type === "water" && <Water boxSize={8} />}
                {log.type === "nutrition" && <Nutrition boxSize={8} />}
              </Td>
              <Td>
                {" "}
                <Text noOfLines={[2, 2, 2, 5]}>{log.description}</Text>
              </Td>
              <Td> {format(parseISO(log.createdAt), "P")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
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
  return (
    <Table variant="simple">
      <TableCaption>Load More</TableCaption>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Description</Th>
          <Th>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Skeleton height="32px" width="32px" borderRadius="50%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="90%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="40px" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="32px" width="32px" borderRadius="50%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="90%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="40px" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Skeleton height="32px" width="32px" borderRadius="50%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="90%" />
          </Td>
          <Td>
            <Skeleton height="16px" width="40px" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
