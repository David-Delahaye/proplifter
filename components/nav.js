import { useAuth } from "@/lib/auth";
import { Flex, Text, Link, Button, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Nav() {
  const { user } = useAuth();
  return (
    <Flex
      backgroundColor="back.900"
      height="60px"
      width="100%"
      alignItems="center"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        margin="auto"
        w="100%"
        maxW="1400px"
        h="50px"
        px={[4, 8, 24, 40, 56]}
      >
        <Stack direction={["row"]} spacing="24px">
          <NextLink href="/">
            <Link color="main.900" mr={12}>
              PROPLIFTER
            </Link>
          </NextLink>
          <NextLink href="/plants">
            <Link color="main.900">PLANTS</Link>
          </NextLink>
          <NextLink href="/">
            <Link color="main.900">ACTIVITY</Link>
          </NextLink>
        </Stack>
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
    </Flex>
  );
}
