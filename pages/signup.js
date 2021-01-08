import { useAuth } from "@/lib/auth";
import { Button, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const auth = useAuth();
  if (auth.user) router.push("/account");

  return (
    <>
      <Heading>Sign Up</Heading>
      Signup OR
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
