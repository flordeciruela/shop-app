'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  NavFunction(_ => render(root));
  Modal(_ => render(root));
  wrapper.append(Hero(_ => render(root)));

	switch(state.screenView) {
    case null:
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
  userOnline: null,
  cartItems: [],
  payMethod: null,
  totalPrice: null
};

$( _ => {
  $(".button-collapse").sideNav();
  getJson();
});
