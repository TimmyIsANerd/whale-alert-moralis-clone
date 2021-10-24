import {
  Button,
  Box,
  Input,
  Stack,
  Center,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Link,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useState } from "react";

export const Auth = () => {
  const { authenticate, isAuthenticating, authError } = useMoralis();
  const [authOption, setAuthOption] = useState(false);
  const showRegOption = () => setAuthOption(true);
  const showLoginOption = () => setAuthOption(false);

  // Sign Up Form
  const SignUp = () => {
    const { signup } = useMoralis();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
      <Stack spacing={3}>
        <Input
          type={username}
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <Input
          type={email}
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Input
          type={password}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
        />
        <Button onClick={() => signup(username, password, email)}>
          Sign Up
        </Button>
        <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
          Authenticate Via MetaMask
        </Button>
        <Center>
          <Text>
            Already have an Account?{" "}
            <Link
              color="#5480f1"
              onClick={() => {
                showLoginOption();
              }}
            >
              Login
            </Link>
          </Text>
        </Center>
      </Stack>
    );
  };

  // Login Form
  const Login = () => {
    const { login } = useMoralis();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
      <Stack spacing={4}>
        <Input
          type={email}
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />
        <Input
          type={password}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.currentTarget.value)}
          required
        />
        <Button onClick={() => login(email, password)}>Log In</Button>
        <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
          Authenticate Via MetaMask
        </Button>
        <Center>
          <Text>
            Not Registered?{" "}
            <Link
              color="#5480f1"
              onClick={() => {
                showRegOption();
              }}
            >
              Create an Account
            </Link>
          </Text>
        </Center>
      </Stack>
    );
  };

  return (
    <Stack spacing={6}>
      <Box mt={5}>{authOption ? <SignUp /> : <Login />}</Box>
      {authError && (
        <Alert status="error">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Authentication has Failed!</AlertTitle>
            <AlertDescription display="block">
              {authError.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
    </Stack>
  );
};
