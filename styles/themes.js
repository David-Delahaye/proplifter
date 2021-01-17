import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    back: {
      900: "#F2F2F2",
    },
    main: {
      900: "#333333",
    },
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
});

export default customTheme;
