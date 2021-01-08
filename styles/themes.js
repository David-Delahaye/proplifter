import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: `'Reem Kufi', sans-serif`,
  },
  colors: {
    back: {
      900: "#333333",
    },
    main: {
      900: "#F2F2F2",
    },
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
});

export default customTheme;
