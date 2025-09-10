import { createContext, useState, useEffect, useRef } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    const intervalRef = useRef(null);

    // Function to add a new notification
    const addNotification = (message) => {
        const newNotification = {
            id: Date.now(),
            message,
            read: false,
        };
        setNotifications((prev) => [newNotification, ...prev]);
    };

    // Function to mark all as read
    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    };

    // Function to stop notifications
    const stopNotifications = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    // Simulate incoming notifications
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            addNotification("You have a new message!");
        }, 5000);

        return () => stopNotifications(); // cleanup on unmount
    }, []);

    return (
        <NotificationContext.Provider
            value={{ notifications, addNotification, markAllAsRead, stopNotifications }}
        >
            {children}
        </NotificationContext.Provider>
    );
}
