import { useAuth } from "@/lib/auth";
import { createPlant } from "@/lib/db";
import {
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { mutate } from "swr";

export default function AddPlantModal() {
  const { user } = useAuth();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newPlant = {
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
      }}
    >
      <input name="name" placeholder="name" />
      <input name="height" placeholder="12cm" />
      <Select placeholder="Select option" name="sunlight">
        <option value="dim">dim</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </Select>
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
      <button>Add a plant</button>
    </form>
  );
}
