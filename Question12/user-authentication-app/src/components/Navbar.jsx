import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Navbar() {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);

    return (
        <nav style={{ padding: "10px", background: "#c4bdbdff", display: "flex", justifyContent: "space-between" }}>
            <h2>Auth App</h2>
            <button onClick={toggleAuth}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </nav>
    );
}

export default Navbar;
