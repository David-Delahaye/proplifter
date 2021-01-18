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
} from "@chakra-ui/react";
import { compareDesc, format, parseISO } from "date-fns";
import useSWR from "swr";

export default function LogTable({ plant }) {
  const { data } = useSWR(`/api/logs/${plant.id}`, fetcher);
  const logs = data?.logs;

  logs?.sort(function (a, b) {
    return compareDesc(parseISO(a.createdAt), parseISO(b.createdAt));
  });

  if (logs?.length) {
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
          {logs.map((log, i) => (
            <Tr key={log.id}>
              <Td>
                {" "}
                {log.type === "sunlight" && <Sunlight boxSize={8} />}
                {log.type === "growth" && <Growth boxSize={8} />}
                {log.type === "water" && <Water boxSize={8} />}
                {log.type === "nutrition" && <Nutrition boxSize={8} />}
              </Td>
              <Td> {log.description}</Td>
              <Td> {format(parseISO(log.createdAt), "P")}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  }
  return "loading";
}
