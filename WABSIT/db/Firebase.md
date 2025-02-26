// Firebase Configuration
import firebase from "firebase/app";
import "firebase/database"; // لاستيراد وظائف قاعدة البيانات

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// الوصول إلى قاعدة البيانات
const database = firebase.database();

// حفظ البيانات في قاعدة البيانات
const saveContactForm = (formData) => {
    database.ref('contacts/').push(formData)
        .then(() => {
            console.log("تم حفظ البيانات بنجاح!");
        })
        .catch((error) => {
            console.error("خطأ في حفظ البيانات: ", error);
        });
};

// قراءة البيانات من قاعدة البيانات
const fetchContacts = () => {
    database.ref('contacts/').once('value')
        .then(snapshot => {
            const data = snapshot.val();
            console.log(data);
        })
        .catch(error => {
            console.error("خطأ في جلب البيانات: ", error);
        });
};