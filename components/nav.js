import { Flex, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Nav() {
  return (
    <Flex
      backgroundColor="back.900"
      height="50px"
      padding={8}
      alignItems="center"
      justifyContent="space-between"
    >
      <NextLink href="/">
        <Link color="main.900">PROPLIFTER</Link>
      </NextLink>
      <Flex alignItems="center">
        <NextLink href="/login">
          <Link color="main.900" mr={4}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/signup">
          <Button
            variant="solid"
            size="md"
            backgroundColor="main.900"
            color="back.900"
          >
            Sign Up
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
}
