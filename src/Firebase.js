import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDo5c8UMGm1SF6F-InOS65VnRWRFj-6ANE",
    authDomain: "dashboard-85694.firebaseapp.com",
    databaseURL: "https://dashboard-85694.firebaseio.com",
    projectId: "dashboard-85694",
    storageBucket: "dashboard-85694.appspot.com",
    messagingSenderId: "389902042484"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;