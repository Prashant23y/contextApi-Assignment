import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ChildComponent() {
    const { theme } = useContext(ThemeContext);

    const boxStyle = {
        padding: "15px",
        borderRadius: "8.5px",
        marginTop: "10px",
        backgroundColor: theme === "light" ? "white" : "gray",
        color: theme === "light" ? "black" : "white"
    };

    return <div style={boxStyle}>This is the child component</div>;
}

export default ChildComponent;
