import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import { Text, Heading } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Heading>Welcome to proplifter</Heading>
      <Text>some interesting facts about product, general marketing shite</Text>
    </>
  );
}
