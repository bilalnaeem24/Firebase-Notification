// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js"
);
// eslint-disable-next-line no-undef
importScripts(
  "https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBbZqFuNRNC2emISKWCArm94hX775FNP1w",
  authDomain: "beamfitness-30650.firebaseapp.com",
  projectId: "beamfitness-30650",
  storageBucket: "beamfitness-30650.firebasestorage.app",
  messagingSenderId: "65536522197",
  appId: "1:65536522197:web:c28c9e191a1a96d7726f5c",
  measurementId: "G-TFKLY8G8DM",
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./favicon.ico", // Update as per your app logo
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
