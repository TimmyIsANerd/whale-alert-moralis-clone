import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});

const appId = "G7ICEnoBmI47SQxy9mZMYbekQxEUgkFjfK8Po8jZ";
const serverUrl = "https://rhehashcrz5z.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <App />
      </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
