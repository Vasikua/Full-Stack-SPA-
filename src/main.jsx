import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme.js";
import "./index.css";
import App from "./components/App/App.jsx";
import GlobalState from "./components/Contex/Contex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </StrictMode>
);
