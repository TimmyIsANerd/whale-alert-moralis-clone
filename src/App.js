// Required Imports
import { ByMoralis } from "react-moralis";
import { Box, Stack, Heading, Center } from "@chakra-ui/react";
import { WatchAddress } from "./Forms/WatchAddress";
import { Auth } from "./Auth/Auth";

function App() {
  // Set Up Authentication
  return (
    <div className="App">
      <Center>
        <Box w={500} mt={5}>
          <Center>
            <Heading size="lg">Whale Alert App🐋🚨</Heading>
          </Center>
          <Stack spacing={4}>
            <Auth/>
            <Box>
              <WatchAddress />
            </Box>
          </Stack>
          <Box float="right" mt={4}>
            <ByMoralis width={200} variant="dark" />
          </Box>
        </Box>
      </Center>
    </div>
  );
}

export default App;
