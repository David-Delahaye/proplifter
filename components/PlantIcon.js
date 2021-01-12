import { Image } from "@chakra-ui/react";

export default function PlantIcon({ icon, ...props }) {
  if (icon < 10) icon = "0" + icon;
  return (
    <>
      <Image src={`/svg/0${icon}-botanic.svg`} {...props} />
    </>
  );
}
