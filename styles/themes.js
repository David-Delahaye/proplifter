import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    back: {
      900: "hsl(0,0%,95%)",
      800: "hsl(0,0%,90%)",
      700: "hsl(0,0%,85%)",
    },
    main: {
      900: "hsl(0,0%,20%)",
      800: "hsl(0,0%,25%)",
      700: "hsl(0,0%,30%)",
    },
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
});

export default customTheme;
