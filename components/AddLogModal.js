import { useAuth } from "@/lib/auth";
import { createLog, createPlant } from "@/lib/db";
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

export default function AddLogModal({ plant }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const { user } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    const newLog = {
      height: e.target.height.value || plant.height,
      type: e.target.type.value,
      description: e.target.description.value,
      authorId: user?.uid,
      plantId: plant.id,
      createdAt: new Date().toISOString(),
    };
    const { id } = createLog(newLog);

    mutate(
      `/api/logs/${plant.id}`,

      async (data) => ({
        logs: [{ id, ...newLog }, ...data.logs],
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
            handleSubmit(e);
          }}
        >
          <ModalHeader>Add a log</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Whats' changed</FormLabel>
              <Select placeholder="Select option" name="type">
                <option value="dim">dim</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Height</FormLabel>
              <Input
                ref={initialRef}
                type="number"
                placeholder={plant.height}
                name="height"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input ref={initialRef} placeholder="Jim" name="description" />
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
