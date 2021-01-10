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
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { useRef } from "react";
import { mutate } from "swr";

export default function AddPlantModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const { user } = useAuth();

  var indents = [];
  for (var i = 1; i < 50; i++) {
    let num = i;
    if (i < 10) num = "0" + num;
    indents.push(
      <FormLabel width="64px" height="64px" borderRadius="50%">
        <Input
          type="radio"
          name="icon"
          value={num}
          position="absolute"
          w="64px"
          h="64px"
        />
        <Image
          src={`/svg/0${num}-botanic.svg`}
          width="64px"
          height="64px"
          key={i}
          p={1}
        />
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
      authorId: user?.uid,
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
      <Button onClick={onOpen}>+ Add Plant</Button>
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
                aria-label="slider-ex-5"
                name="water"
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
