import { Image } from "@chakra-ui/react";

export default function PlantIcon({ icon }) {
  return (
    <>
      <Image src={`/svg/0${icon}-botanic.svg`} width="64px" height="64px" />
    </>
  );
}
