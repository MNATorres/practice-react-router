import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
