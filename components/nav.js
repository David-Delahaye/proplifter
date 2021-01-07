import { Flex, Text, Link, Button } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Flex
      backgroundColor="gray.900"
      height="100px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text color="whiteAlpha.900">Proplifter</Text>
      <Flex alignItems="center">
        <Link color="whiteAlpha.900">Login</Link>
        <Button
          variant="solid"
          size="md"
          colorScheme="whiteAlpha"
          backgroundColor="whiteAlpha.900"
          color="gray.900"
        >
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
}
