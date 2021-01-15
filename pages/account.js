import DashboardShell from "@/components/DashboardShell";
import PageRow from "@/components/PageRow";
import PlantIcon from "@/components/PlantIcon";
import { useAuth } from "@/lib/auth";
import { Google } from "@/styles/icons";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Account() {
  const auth = useAuth();
  const user = auth.user;
  if (!user) return "no user";
  if (user) {
    return (
      <DashboardShell>
        <PageRow>
          <Flex flex="1" alignItems="center" height="70vh">
            <Image
              src={user.photoUrl}
              style={{ borderRadius: "50%" }}
              width="100px"
              height="100px"
              mr={4}
            />
            <Stack direction="column">
              <Heading>
                {user.name}
                <Badge>FREE</Badge>
              </Heading>
              <Text>{user.email}</Text>
              <Text>
                <Google /> Verified
              </Text>

              <Divider />

              <Link
                onClick={(e) => {
                  auth.signout();
                }}
              >
                Log Out
              </Link>
              <Link
                onClick={(e) => {
                  console.log("TODO, switch account");
                }}
              >
                Switch Account
              </Link>
            </Stack>
          </Flex>
          <Center flex="1" display={["none", "none", "flex"]}>
            <PlantIcon icon={6} width="65%" />
          </Center>
        </PageRow>
      </DashboardShell>
    );
  }
  return <h1>Loading State</h1>;
}
