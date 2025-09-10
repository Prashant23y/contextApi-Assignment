import NotificationList from "./components/NotificationList";
import Controls from "./components/Controls";

export default function App() {
  return (
    <div className="app">
      <h1>Real-Time Notification Panel</h1>
      <Controls />
      <NotificationList />
    </div>
  );
}
