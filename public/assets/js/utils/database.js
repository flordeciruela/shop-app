'use strict';

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
