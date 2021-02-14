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
  Stack,
  MenuItem,
} from "@chakra-ui/react";
import { addDays } from "date-fns";
import { useRef, useState } from "react";
import { mutate } from "swr";
import PlantIcon from "./PlantIcon";

export default function AddPlantModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [waterValue, setWaterValue] = useState(0);
  const [feedValue, setFeedValue] = useState(0);

  const initialRef = useRef();

  const { user } = useAuth();

  var indents = [];
  for (var i = 1; i < 50; i++) {
    indents.push(
      <MenuItem
        width="64px"
        height="64px"
        p={0}
        m={1}
        borderRadius="50%"
        key={i}
      >
        <FormLabel
          width="64px"
          height="64px"
          borderRadius="50%"
          id={i}
          onClick={(e) => {
            console.log("You picked ", e.target.defaultValue);
            setSelectedIcon(e.target.defaultValue);
          }}
        >
          <Input
            type="radio"
            name="icon"
            value={i}
            id={i}
            position="absolute"
            w="64px"
            h="64px"
            border="none"
          />
          <PlantIcon icon={i} width="64px" height="64px" p={1} />
        </FormLabel>
      </MenuItem>
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      icon: e.target.icon.value,
      name: e.target.name.value,
      species: e.target.species.value,
      height: e.target.height.value,
      sunlight: e.target.sunlight.value,
      water: e.target.water.value,
      feed: e.target.feed.value,
      authorId: user?.uid,
      createdAt: new Date().toISOString(),
      lastWatered: new Date().toISOString(),
      lastFed: new Date().toISOString(),
      nextWater: addDays(new Date(), e.target.water.value).toISOString(),
      nextFeed: addDays(new Date(), e.target.feed.value).toISOString(),
    };
    const { id } = createPlant(newPlant);

    mutate(
      ["/api/plants", user.token],
      async (data) => ({
        plants: [{ id, ...newPlant }, ...data.plants],
      }),
      false
    );

    setSelectedIcon(0);

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
            handleSubmit(e);
          }}
        >
          <ModalHeader>Add a plant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack direction="row" gap={4}>
              <FormControl mt={4}>
                {/* <FormLabel>Icon</FormLabel> */}
                <Menu>
                  <MenuButton
                    as={Button}
                    width="150px"
                    height="150px"
                    borderRadius="50%"
                  >
                    {selectedIcon !== 0 ? (
                      <PlantIcon icon={selectedIcon} />
                    ) : (
                      "choose an icon"
                    )}
                  </MenuButton>
                  <MenuList w="70vw" maxW="500px">
                    <Flex
                      wrap="wrap"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {indents}
                    </Flex>
                  </MenuList>
                </Menu>
              </FormControl>
              <Stack width="100%">
                <FormControl>
                  <FormLabel>Plant name</FormLabel>
                  <Input ref={initialRef} placeholder="Jim" name="name" />
                </FormControl>

                <FormControl>
                  <FormLabel>Plant Species</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Golden Pothis"
                    name="species"
                  />
                </FormControl>
              </Stack>
            </Stack>

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
              <FormLabel>Water Interval </FormLabel>
              <FormLabel fontWeight="normal">{waterValue} days</FormLabel>
              <Slider
                aria-label="watering frequency"
                name="water"
                value={waterValue}
                onChange={(val) => {
                  setWaterValue(val);
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Feed Interval</FormLabel>
              <FormLabel fontWeight="normal">{feedValue} days</FormLabel>
              <Slider
                aria-label="feeding frequency"
                name="feed"
                value={feedValue}
                onChange={(val) => {
                  setFeedValue(val);
                }}
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
}
