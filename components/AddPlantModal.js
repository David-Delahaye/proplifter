import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { useRef } from "react";
import { mutate } from "swr";
import PlantIcon from "./PlantIcon";

export default function AddPlantModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const { user } = useAuth();

  var indents = [];
  for (var i = 1; i < 50; i++) {
    indents.push(
      <FormLabel width="64px" height="64px" borderRadius="50%" key={i}>
        <Input
          type="radio"
          name="icon"
          value={i}
          id={i}
          position="absolute"
          w="64px"
          h="64px"
        />
        <PlantIcon icon={i} width="64px" height="64px" p={1} />
      </FormLabel>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      icon: e.target.icon.value,
      name: e.target.name.value,
      height: e.target.height.value,
      sunlight: e.target.sunlight.value,
      water: e.target.water.value,
      feed: e.target.feed.value,
      authorId: user?.uid,
      createdAt: new Date().toISOString(),
      lastWatered: new Date().toISOString(),
      lastFed: new Date().toISOString(),
    };
    const { id } = createPlant(newPlant);

    mutate(
      ["/api/plants", user.token],
      async (data) => ({
        plants: [{ id, ...newPlant }, ...data.plants],
      }),
      false
    );

    onClose();
  }

  return (
    <>
      <Button
        onClick={onOpen}
        borderRadius="50%"
        backgroundColor="main.900"
        color="back.900"
        fontSize="26px"
      >
        +
      </Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={(e) => {
            console.log("here i am");
            handleSubmit(e);
          }}
        >
          <ModalHeader>Add a plant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Plant name</FormLabel>
              <Input ref={initialRef} placeholder="Jim" name="name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Icon</FormLabel>
              <Menu>
                <MenuButton as={Button}>Actions</MenuButton>
                <MenuList>
                  <Flex wrap="wrap" alignItems="center" justifyContent="center">
                    {indents}
                  </Flex>
                </MenuList>
              </Menu>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Height (cm)</FormLabel>
              <Input type="number" placeholder="13cm" name="height" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Sunlight Preference</FormLabel>
              <Select placeholder="Select option" name="sunlight">
                <option value="dim">dim</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Water Interval</FormLabel>
              <Slider
                aria-label="watering frequency"
                name="water"
                onChangeEnd={(val) => console.log(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Feed Interval</FormLabel>
              <Slider
                aria-label="feeding frequency"
                name="feed"
                onChangeEnd={(val) => console.log(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );

  return (
    <form>
      <button>Add a plant</button>
    </form>
  );
}
