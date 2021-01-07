import "../styles/globals.css";
import { AuthProvider } from "@/lib/auth";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "@/components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <AuthProvider>
        <Nav />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
