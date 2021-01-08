import { useAuth } from "@/lib/auth";
import { Button, Heading } from "@chakra-ui/react";

export default function Login() {
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
