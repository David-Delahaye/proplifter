import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";

import { Google } from "@/styles/icons";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Link,
  Center,
} from "@chakra-ui/react";
import DashboardShell from "@/components/DashboardShell";
import PageRow from "@/components/PageRow";
import NextLink from "next/link";
import PlantIcon from "@/components/PlantIcon";

export default function SignUp() {
  const router = useRouter();
  const auth = useAuth();
  if (auth.user) router.push("/account");

  return (
    <DashboardShell>
      <PageRow>
        <Flex flexDir="column" justifyContent="center" flex="1">
          <Heading mb={8}>Sign Up</Heading>
          <Input placeholder="Email" backgroundColor="back.900" mb={2} />
          <Input placeholder="Display Name" backgroundColor="back.900" mb={8} />
          <Input placeholder="Password" backgroundColor="back.900" mb={2} />
          <Input
            placeholder="Confirm your password"
            backgroundColor="back.900"
            mb={8}
          />
          <Button
            variant="solid"
            size="md"
            backgroundColor="main.900"
            color="back.900"
            mb={2}
          >
            Create An Account
          </Button>
          <Text fontWeight="light">
            Already have an Account?{" "}
            <NextLink href="/login">
              <Link>Login</Link>
            </NextLink>
          </Text>
          <Center h={20}>OR</Center>
          <Button
            variant="solid"
            size="md"
            backgroundColor="main.900"
            color="back.900"
            onClick={(e) => {
              auth.signinWithGoogle();
            }}
          >
            <Google boxSize={6} mr={4} />
            Login With Google
          </Button>
        </Flex>
        <PlantIcon
          icon={32}
          display={["none", "none", "none", "block"]}
          flex="1"
        />
      </PageRow>
    </DashboardShell>
  );
}
