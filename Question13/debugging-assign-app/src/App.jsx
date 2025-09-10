import { ChakraProvider, Box, Flex, Grid, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgNav = theme === "light" ? "gray.100" : "gray.700";
  const bgCard = theme === "light" ? "gray.200" : "gray.600";
  const bgFooter = theme === "light" ? "gray.300" : "gray.800";

  return (
    <ChakraProvider>
      {/* Navbar */}
      <Flex
        as="nav"
        p="4"
        bg={bgNav}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={toggleAuth}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </Flex>

      {/* Responsive Grid */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        gap="4"
        p="4"
      >
        {["Card 1", "Card 2", "Card 3", "Card 4"].map((card) => (
          <Box key={card} p="4" shadow="md" bg={bgCard}>
            {card}
          </Box>
        ))}
      </Grid>

      {/* Footer */}
      <Box as="footer" p="4" bg={bgFooter} textAlign="center">
        Footer Content
      </Box>
    </ChakraProvider>
  );
}

export default App;
