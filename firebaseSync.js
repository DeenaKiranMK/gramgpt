// ekrishi/backend/services/firebaseSync.js
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, push } = require('firebase/database');

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

exports.syncToFirebase = (path, data) => {
  const refPath = ref(db, path);
  return push(refPath, data);
};
