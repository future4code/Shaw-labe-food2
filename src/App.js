import React from "react";
import { Router } from "./Router/Routes";
import { ChakraProvider, Container } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Container p="0">
        <Router />
      </Container>
    </ChakraProvider>
  );
};

export default App;
