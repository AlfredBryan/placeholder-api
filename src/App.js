import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import { Posts } from "./pages";
import customTheme from "./theme";

const App = () => {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Posts />
      </ChakraProvider>
    </>
  );
};

export default App;
