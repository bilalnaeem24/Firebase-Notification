import React, { useEffect, useState } from "react";
import axios from "axios";
import { requestFcmToken } from "./firebase";

function App() {
  const [userId] = useState("6773cc49100041ae1e6e5d20");
  // const [deviceId] = useState("dfs5454zxg");
  const [fcmToken, setFcmToken] = useState(null);

  const saveFcmTokenToBackend = async (token) => {
    if (token) {
      try {
        const response = await axios.post(
          "http://localhost:4001/api/notification",
          {
            userId,
            // deviceId,
            title: "this is my notificatin title",
            body: "this is my notification body",
            token: token,
          }
        );
        console.log("FCM Token saved successfully: ", response);
      } catch (error) {
        console.error("Error saving FCM token: ", error);
      }
    }
  };

  useEffect(() => {
    const fetchFcmToken = async () => {
      try {
        const token = await requestFcmToken();
        if (token) {
          setFcmToken(token);
          await saveFcmTokenToBackend(token);
        } else {
          console.warn(
            "No FCM token retrieved. Ensure notifications are allowed."
          );
        }
      } catch (error) {
        console.error("Error fetching FCM token: ", error);
      }
    };

    fetchFcmToken();
  }, []);

  return (
    <div className="App">
      <h1>FCM Token Demo</h1>
      <p>Your FCM Token is: {fcmToken ? fcmToken : "Loading..."}</p>
    </div>
  );
}

export default App;
