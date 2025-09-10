import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar() {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <h1>Dashboard</h1>
            <div className="nav-actions">
                <span>{isLoggedIn ? "Logged In" : "Logged Out"}</span>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
                <button onClick={toggleAuth}>
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </div>
        </nav>
    );
}
