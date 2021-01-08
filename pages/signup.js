import { useAuth } from "@/lib/auth";
import { Button, Heading } from "@chakra-ui/react";

export default function SignUp() {
  const auth = useAuth();
  if (auth.user) {
    return (
      <>
        <Heading></Heading>
        <Button
          variant="solid"
          size="md"
          backgroundColor="main.900"
          color="back.900"
          onClick={(e) => {
            auth.signout();
          }}
        >
          Log Out
        </Button>
      </>
    );
  }
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
