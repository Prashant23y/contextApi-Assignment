import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}
