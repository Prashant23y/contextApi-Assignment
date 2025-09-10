import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`footer ${theme}`}>
            <p>© {new Date().getFullYear()} My Dashboard</p>
        </footer>
    );
}
