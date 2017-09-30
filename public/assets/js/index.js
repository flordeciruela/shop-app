'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Navbar);
  NavFunction(_ => render(root));
  Modal(_ => render(root));
  wrapper.append(Hero(_ => render(root)));

	switch(state.screenView) {
    case null:
      //wrapper.append(Navbar(_ => render(root)));
      wrapper.append(StoresList(_ => render(root)));
      wrapper.append(Grid(_ => render(root)));
      break;
    case "Cart":
      wrapper.append(Cart(_ => render(root)));
      break;
		case "Store":
      wrapper.append(Store(_ => render(root)));
      break;
	}
  wrapper.append(Footer(_ => render(root)));
  root.append(wrapper);
}

const state = {
  dataBase: null,
  screenView: null,
  storeSelected: null,
  language: null,
  userOnline: null,
  cartItems: [],
  payMethod: null,
  totalPrice: null
};

$( _ => {
  $(".button-collapse").sideNav();
  getJson();

  /*
  $('#login-a').on('click', (e) => {
    let user = $('#use').val() + '@usuario.com';
    let pass = $('#clave').val() + 0;
    console.log(user);
    console.log(pass);
    firebase.auth().signInWithEmailAndPassword(user, pass)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });


  });

  $('#logout-a').on('click', (e) => {

    firebase.auth().signOut().then(function() {
      console.log("cerraste");
    }).catch(function(error) {
      console.log("error al cerrar");
    });
  });
  */

});
