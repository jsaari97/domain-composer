import * as React from "react";
import { theme as base, ChakraProvider } from "@chakra-ui/react";

export const theme: typeof base = {
  ...base,
};

export const Theme: React.FC = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
