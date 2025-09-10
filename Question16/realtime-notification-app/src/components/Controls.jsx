import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";

export default function Controls() {
    const { markAllAsRead, stopNotifications } = useContext(NotificationContext);

    return (
        <div className="controls">
            <button onClick={markAllAsRead}>Mark All as Read</button>
            <button onClick={stopNotifications}>Stop Notifications</button>
        </div>
    );
}
