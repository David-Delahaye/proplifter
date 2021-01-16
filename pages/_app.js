import { AuthProvider } from "@/lib/auth";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import customTheme from "@/styles/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
        rel="stylesheet"
      />
  
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet"/>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
