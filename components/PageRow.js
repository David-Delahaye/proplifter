import { Flex } from "@chakra-ui/react";

export default function PageRow(props) {
  return (
    <Flex
      color="main.900"
      backgroundColor="back.800"
      position="relative"
      flexDir={["column", "column", "column", "row"]}
      mb={48}
      minH="30vh"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
