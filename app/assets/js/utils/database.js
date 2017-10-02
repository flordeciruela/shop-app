'use strict';

const config = {
  apiKey: "AIzaSyApdmtOju1yEOa_eQN6je9KVoQtzdRy6bY",
  authDomain: "don-pepe-23d4b.firebaseapp.com",
  databaseURL: "https://don-pepe-23d4b.firebaseio.com",
  projectId: "don-pepe-23d4b",
  storageBucket: "",
  messagingSenderId: "170150342426"
};
firebase.initializeApp(config);

const dataBase = firebase.database();
const ref = dataBase.ref('metadata');

const getJson = () => {
  ref.on('value', (snapshot) => {
    const data = snapshot.val();
    state.dataBase = data;
    const root = $(".root");
    render(root);
  });
}
