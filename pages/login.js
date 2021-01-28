import DashboardShell from "@/components/DashboardShell";
import PageRow from "@/components/PageRow";
import PlantIcon from "@/components/PlantIcon";
import { useAuth } from "@/lib/auth";
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
import { useRouter } from "next/router";
import NextLink from "next/link";
import { useState } from "react";

function PasswordInput(props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md" {...props}>
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Password"
        backgroundColor="back.900"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default function Login() {
  const auth = useAuth();
  const router = useRouter();
  if (auth.user) router.push("/account");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.email);

    auth.signinWithPassword(e.target.email.value, e.target.password.value);
  };

  return (
    <DashboardShell>
      <PageRow>
        <Flex flexDir="column" justifyContent="center" flex="1">
          <Heading mb={8}>Login</Heading>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <Input
              placeholder="Email"
              backgroundColor="back.900"
              mb={2}
              name="email"
            />
            <Input
              mb={8}
              name="password"
              backgroundColor="back.900"
              placeholder="password"
              type="password"
            />
            <Button
              variant="solid"
              size="md"
              backgroundColor="main.900"
              color="back.900"
              mb={2}
              type="submit"
            >
              Login
            </Button>
          </form>
          <Text fontWeight="light">
            Dont have an Account?{" "}
            <NextLink href="/signup">
              <Link>Sign Up</Link>
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
          icon={4}
          display={["none", "none", "none", "block"]}
          flex="1"
        />
      </PageRow>
    </DashboardShell>
  );
}
