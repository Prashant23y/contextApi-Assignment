import { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Main() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <main style={{ padding: "20px", textAlign: "center" }}>
            {isLoggedIn ? (
                <h1>You are logged in!</h1>
            ) : (
                <h1>Please log in to continue</h1>
            )}
        </main>
    );
}

export default Main;
