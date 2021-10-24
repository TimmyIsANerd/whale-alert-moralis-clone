// Required Imports
import { ByMoralis, useMoralis } from "react-moralis";
import { Box, Stack, Heading, Center } from "@chakra-ui/react";
import { WatchAddress } from "./Forms/WatchAddress";
import { Auth } from "./Auth/Auth";

function App() {
  // Set Up Application
  const {isAuthenticated, user, logout} = useMoralis();
  return (
    <div className="App">
      <Center>
        <Box w={500} mt={5}>
          <Center>
            <Heading size="lg">Whale Alert App🐋🚨</Heading>
          </Center>
          <Stack spacing={4}>
          {isAuthenticated ? <Box mt={5}><WatchAddress user={user} logout={logout} /></Box> : 
            <Auth/>  }
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
