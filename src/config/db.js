/* eslint-disable */
const config = {
    apiKey: "AIzaSyBl7gfCfEv23KT3n693lCkh_j01csLF48k",
    authDomain: "dashboar-f262c.firebaseapp.com",
    databaseURL: "https://dashboar-f262c.firebaseio.com",
    projectId: "dashboar-f262c",
    storageBucket: "dashboar-f262c.appspot.com",
    messagingSenderId: "61549294347"
  };
let app = firebase.initializeApp(config)

const db = app.firestore()

db.settings({timestampsInSnapshots: true});
db.enablePersistence();

export { db };
