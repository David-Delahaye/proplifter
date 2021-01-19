import { Box, Flex, Skeleton, Table, Td } from "@chakra-ui/react";

const SkeletonRow = (props) => (
  <Flex justifyContent="space-between" p={4} {...props}>
    <Flex>
      <Skeleton width="64px" height="64px" mr={4} borderRadius="50%" />
      <Flex flexDirection="column">
        <Skeleton width="150px" height="25px" mb={2} />
        <Skeleton width="100px" height="16px" mb={1} />
        <Skeleton width="100px" height="16px" />
      </Flex>
    </Flex>
    <Flex alignItems="center" justifyContent="space-between">
      <Skeleton width="32px" height="32px" mr={2} borderRadius="50%" />
      <Skeleton width="32px" height="32px" borderRadius="50%" />
    </Flex>
  </Flex>
);

export default function PlantTableEmpty() {
  return (
    <>
      <Flex flexDirection="column">
        <SkeletonRow />
        <SkeletonRow backgroundColor="back.800" />
        <SkeletonRow />
        <SkeletonRow backgroundColor="back.800" />
      </Flex>
    </>
  );
}
