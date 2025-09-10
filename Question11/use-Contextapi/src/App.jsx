import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import NestedComponent from "./components/NestedComponent";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const appStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme === "light" ? "white" : "gray",
    color: theme === "light" ? "black" : "white"
  };

  return (
    <div style={appStyle}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NestedComponent />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
