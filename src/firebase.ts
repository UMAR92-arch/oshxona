import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Admin paneldan IP (config) o'zgartirish uchun biz uni avval local storagedan o'qiymiz
// Yoki foydalanuvchi o'zining haqiqiy Firebase configini shu yerga kiritishi kerak:
export const getFirebaseConfig = () => {
  const storedConfig = localStorage.getItem('firebaseConfig');
  if (storedConfig) {
    try {
      return JSON.parse(storedConfig);
    } catch (e) {
      console.error(e);
    }
  }
  
  // Default bo'sh config (faqat namuna uchun)
  return {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
};

export const initFirebase = (config: any) => {
  if (config.apiKey === "YOUR_API_KEY") return null;
  try {
    const app = initializeApp(config);
    return getFirestore(app);
  } catch (e) {
    console.error("Firebase initialization error:", e);
    return null;
  }
};

let dbInstance = initFirebase(getFirebaseConfig());

export const getDb = () => dbInstance;
export const setDbConfig = (config: any) => {
  localStorage.setItem('firebaseConfig', JSON.stringify(config));
  dbInstance = initFirebase(config);
};
