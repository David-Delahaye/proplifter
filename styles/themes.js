import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: `'Reem Kufi', sans-serif`,
  },
  colors: {
    back: {
      900: "#F2F2F2",
    },
    main: {
      900: "#233332",
    },
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default customTheme;
