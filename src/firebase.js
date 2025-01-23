import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBbZqFuNRNC2emISKWCArm94hX775FNP1w",
  authDomain: "beamfitness-30650.firebaseapp.com",
  projectId: "beamfitness-30650",
  storageBucket: "beamfitness-30650.firebasestorage.app",
  messagingSenderId: "65536522197",
  appId: "1:65536522197:web:c28c9e191a1a96d7726f5c",
  measurementId: "G-TFKLY8G8DM",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

const vapid_api_key =
  "BCB4LUhXF_DA_9aIIrLQWi8nl6EzbeDkX6lvVuOHLRB8o7vFRuAQ-dw0KBEYsrE_OPQ-FmiS0wciocAtkKqNOm8";

export const requestFcmToken = async () => {
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, { vapidKey: vapid_api_key });
      } else {
        throw new Error("Notification Not Granted");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
