import { useAuth } from "@/lib/auth";
import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Login() {
  const auth = useAuth();
  const router = useRouter();
  if (auth.user) router.push("/account");
  return (
    <>
      <Heading>Login</Heading>
      <Button
        variant="solid"
        size="md"
        backgroundColor="main.900"
        color="back.900"
        onClick={(e) => {
          auth.signinWithGoogle();
        }}
      >
        Login With Google
      </Button>
    </>
  );
}
