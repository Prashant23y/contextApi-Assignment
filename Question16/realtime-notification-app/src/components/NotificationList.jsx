import { useContext } from "react";
import { NotificationContext } from "../contexts/NotificationContext";

export default function NotificationList() {
    const { notifications } = useContext(NotificationContext);

    return (
        <div className="notification-list">
            <h2>Notifications</h2>
            {notifications.length === 0 ? (
                <p>No notifications yet.</p>
            ) : (
                <ul>
                    {notifications.map((n) => (
                        <li
                            key={n.id}
                            className={n.read ? "read" : "unread"}
                        >
                            {n.message}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
