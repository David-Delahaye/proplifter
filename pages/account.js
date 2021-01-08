import { useAuth } from "@/lib/auth";
import { Button } from "@chakra-ui/react";

export default function Account() {
  const auth = useAuth();
  const user = auth.user;
  if (!user) return "no user";
  if (user) {
    return (
      <>
        <img src={user.photoUrl} style={{ borderRadius: "50%" }} />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.provider}</p>
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
  return <h1>Loading State</h1>;
}
