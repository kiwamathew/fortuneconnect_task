"use client";

import { useEffect, useState } from "react";

// Define the Notification interface
interface Notification {
  id: number;
  title: string;
  date: string; // Consider using a Date object if you're doing date manipulation
  message: string;
  type: "info" | "message" | "warning" | "alert"; // You can expand this list if needed
}

// Mock notifications data
const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New project update available!",
    date: "2024-10-10",
    message: "Check out the latest updates on the project dashboard.",
    type: "info",
  },
  {
    id: 2,
    title: "New message from John Doe",
    date: "2024-10-09",
    message: "John sent you a message regarding the upcoming meeting.",
    type: "message",
  },
  {
    id: 3,
    title: "System maintenance scheduled",
    date: "2024-10-08",
    message: "The system will be down for maintenance on October 15th.",
    type: "warning",
  },
  {
    id: 4,
    title: "Your subscription is expiring soon!",
    date: "2024-10-05",
    message: "Renew your subscription to continue enjoying our services.",
    type: "alert",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Simulating an API call
    setNotifications(mockNotifications);
  }, []);

  const getBgColor = (type: Notification["type"]) => {
    switch (type) {
      case "info":
        return "bg-blue-100";
      case "message":
        return "bg-green-100";
      case "warning":
        return "bg-yellow-100";
      case "alert":
        return "bg-red-100";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <span className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {notifications.map((notification) => (
          <div key={notification.id} className={`rounded-md p-4 ${getBgColor(notification.type)}`}>
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{notification.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {notification.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
