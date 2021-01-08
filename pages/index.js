import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import { Text, Heading, Box, Image, Flex, Grid } from "@chakra-ui/react";

Flex;
export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Flex height="70vh" color="main.900" backgroundColor="back.900">
        <Flex
          height="100%"
          width="50%"
          padding={8}
          flexDirection="column"
          justifyContent="center"
          bgGradient="linear(to-r, green.200, pink.500)"
        >
          <Heading>Watch Your Plants Grow</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et. Phasellus nec maximus
            odio, eu efficitur ante. Pellentesque commodo, lacus a rhoncus
            sagittis, velit urna aliquet velit, ac interdum ligula felis varius
            nunc. Vestibulum condimentum, tellus auctor volutpat ornare, ligula
            eros dapibus orci, a molestie massa mi at quam. Curabitur et
            ultrices ligula. Pellentesque magna libero, lacinia vel quam a,
            faucibus tristique nulla.
          </Text>
        </Flex>
        <Image
          height="100%"
          width="50%"
          fit="cover"
          src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ml="auto"
          opacity={1}
        />
      </Flex>
      <Flex height="70vh" color="main.900" backgroundColor="back.900">
        <Flex
          height="100%"
          width="50%"
          padding={8}
          flexDirection="column"
          justifyContent="center"
        >
          <Heading>Watch Your Plants Grow</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et. Phasellus nec maximus
            odio, eu efficitur ante. Pellentesque commodo, lacus a rhoncus
            sagittis, velit urna aliquet velit, ac interdum ligula felis varius
            nunc. Vestibulum condimentum, tellus auctor volutpat ornare, ligula
            eros dapibus orci, a molestie massa mi at quam. Curabitur et
            ultrices ligula. Pellentesque magna libero, lacinia vel quam a,
            faucibus tristique nulla.
          </Text>
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" width="50%">
          <Box w="100%" h="100%" bg="main.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="main.900" />
        </Grid>
      </Flex>
      <Flex height="70vh" color="main.900" backgroundColor="back.900">
        <Grid templateColumns="repeat(2, 1fr)" width="50%">
          <Box w="100%" h="100%" bg="main.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="blue.900" />
          <Box w="100%" h="100%" bg="main.900" />
        </Grid>
        <Flex
          height="100%"
          width="50%"
          padding={8}
          flexDirection="column"
          justifyContent="center"
        >
          <Heading>Watch Your Plants Grow</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            blandit erat vel mi finibus fermentum. Donec interdum interdum
            tellus, ut consequat magna consectetur et. Phasellus nec maximus
            odio, eu efficitur ante. Pellentesque commodo, lacus a rhoncus
            sagittis, velit urna aliquet velit, ac interdum ligula felis varius
            nunc. Vestibulum condimentum, tellus auctor volutpat ornare, ligula
            eros dapibus orci, a molestie massa mi at quam. Curabitur et
            ultrices ligula. Pellentesque magna libero, lacinia vel quam a,
            faucibus tristique nulla.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
