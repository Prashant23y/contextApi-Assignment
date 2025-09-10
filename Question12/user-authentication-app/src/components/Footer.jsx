import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Footer() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <footer style={{ padding: "10px", background: "white", textAlign: "center" }}>
            {isLoggedIn ? "Welcome, User" : "Please log in"}
        </footer>
    );
}

export default Footer;
