import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Sidebar() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <aside className="sidebar">
            <h2>Sidebar</h2>
            <p>{isLoggedIn ? "Welcome, User!" : "Please log in"}</p>
            <ul>
                <li>Home</li>
                <li>Profile</li>
                <li>Settings</li>
            </ul>
        </aside>
    );
}
