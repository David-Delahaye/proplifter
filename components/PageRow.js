import { Flex } from "@chakra-ui/react";

export default function PageRow(props) {
  console.log(props);
  return (
    <Flex
      color="main.900"
      backgroundColor="back.900"
      position="relative"
      flexDir={["column", "column", "row"]}
      mb={48}
      minH="30vh"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
