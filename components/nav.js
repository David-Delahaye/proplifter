import { useAuth } from "@/lib/auth";
import { Flex, Text, Link, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Nav() {
  const { user } = useAuth();
  return (
    <Flex
      backgroundColor="back.900"
      height="50px"
      p={8}
      px={[4, 8, 24, 40, 56]}
      alignItems="center"
      justifyContent="space-between"
      margin="auto"
    >
      <NextLink href="/">
        <Link color="main.900">PROPLIFTER</Link>
      </NextLink>
      <Flex alignItems="center">
        {user ? (
          <NextLink href="/account">
            <Link>
              <Flex alignItems="center">
                <img
                  src={user?.photoUrl}
                  style={{ borderRadius: "50%" }}
                  width="35px"
                  height="35px"
                />

                <Text fontSize="20px" ml={4}>
                  {user?.name}
                </Text>
              </Flex>
            </Link>
          </NextLink>
        ) : (
          <>
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
          </>
        )}
      </Flex>
    </Flex>
  );
}
