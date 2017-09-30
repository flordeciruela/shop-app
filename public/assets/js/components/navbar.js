'use strict';
/*
const Navbar = (update) => {

  const container = $('<header></header>');
  const dropdownContent = $('<ul id="dropdown1" class="dropdown-content"></ul>');
  container.append(dropdownContent);

  for (let store in state.dataBase.stores) {
    let li = $('<li></li>');
    let anchor = $('<a href="#!">'+state.dataBase.stores[store].district+'</a>');
    dropdownContent.append(li);
    li.append(anchor);
  }

  const nav = $('<nav class="nav-extended"></nav>');
  const navWrapper = $('<div class="nav-wrapper"></div>');
  const aLogo = $('<a href="#" class="brand-logo"></a>');
  const ilogo = $('<i class="material-icons logo-css">shopping_basket</i>');
  const aMenu = $('<a href="#" data-activates="mobile-demo" class="button-collapse"></a>');
  const iMenu = $('<i class="material-icons">menu</i>');
  const ulLinks = $('<ul id="nav-mobile" class="right hide-on-med-and-down"></ul>');
  const liCart = $('<li></li>');
  const aCart = $('<a href="#"></a>');
  const iCart = $('<i class="large material-icons">local_grocery_store</i>');
  const liStores = $('<li></li>');
  const aStores = $('<a href="#">Tiendas</a>');
  const liLogin = $('<li></li>');
  const aLogin = $('<a href="#">Iniciar sesión</a>');

  const ulLinksMobile = $('<ul class="side-nav" id="mobile-demo"></ul>');
  const liCartMobile = $('<li></li>');
  const aCartMobile = $('<a href="#"></a>');
  const iCartMobile = $('<i class="large material-icons">local_grocery_store</i>');
  const liStoresMobile = $('<li></li>');
  const aStoresMobile = $('<a class="dropdown-button" href="#!" data-activates="dropdown1">Tiendas</a>');
  const iStoresMobile = $('<i class="material-icons right">arrow_drop_down</i>');
  const liLoginMobile = $('<li></li>');
  const aLoginMobile = $('<a href="#">Iniciar sesión</a>');

  container.append(nav);
  nav.append(navWrapper);
  navWrapper.append(aLogo);
  aLogo.append(ilogo);
  navWrapper.append(aMenu);
  aMenu.append(iMenu);
  navWrapper.append(ulLinks);
  ulLinks.append(liCart);
  liCart.append(aCart);
  aCart.append(iCart);
  ulLinks.append(liStores);
  liStores.append(aStores);
  ulLinks.append(liLogin);
  liLogin.append(aLogin);

  navWrapper.append(ulLinksMobile);
  ulLinksMobile.append(liCartMobile);
  liCartMobile.append(aCartMobile);
  aCartMobile.append(iCartMobile);
  ulLinksMobile.append(liStoresMobile);
  liStoresMobile.append(aStoresMobile);
  aStoresMobile.append(iStoresMobile);
  ulLinksMobile.append(liLoginMobile);
  liLoginMobile.append(aLoginMobile);

  aMenu.on('click', (e) => {

    aMenu.sideNav({
        //closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens,
    });

  });

  aStoresMobile.on('click', (e) => {
    aStoresMobile.dropdown();
  });

  return container;
}
*/
const Navbar = (update) => {
  const navbarHtml = `<header class="navbar-fixed">
                    <ul id="dropdown1" class="dropdown-content">
                      <li><a href="#!" class="spanish">Español</a></li>
                      <li><a href="#!" class="english">English</a></li>
                    </ul>
                    <nav class="nav-extended">
                      <div class="nav-wrapper">
                        <a href="#!" class="brand-logo"><i class="material-icons logo-css">store</i></a>
                        <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                          <li class="empty"><i class="large material-icons">shopping_cart</i></li>
                          <li class="hide"><a class="cart" href="#"><i class="large material-icons">shopping_cart</i><span class="cart-item"></span></a></li>
                          <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Idioma<i class="material-icons right">arrow_drop_down</i></a></li>
                          <li><a class="login modal-trigger" href="#modal1">Iniciar sesión</a></li>
                        </ul>
                        <ul id="slide-out" class="side-nav">
                          <li class="hide"><a class="cart" href="#"><i class="large material-icons">shopping_cart</i><span class="cart-item"></span></a></li>
                          <li><a class="login modal-trigger" href="#modal1">Iniciar sesión</a></li>
                          <li class="no-padding">
                            <ul class="collapsible collapsible-accordion">
                              <li>
                                <a class="collapsible-header">Idioma<i class="material-icons right">arrow_drop_down</i></a>
                                <div class="collapsible-body">
                                  <ul>
                                    <li class="spanish"><a href="#!">Español</a></li>
                                    <li class="english"><a href="#!">English</a></li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </header>`;
  return navbarHtml;
};

const NavFunction = (update) => {
  $('.brand-logo').on('click', (e) => {
    state.screenView = null;
    update();
  });

  $('.spanish').on('click', (e) => {
    state.language = "spanish";
    $('.button-collapse').sideNav('hide');
    update();
  });

  $('.english').on('click', (e) => {
    state.language = "english";
    $('.button-collapse').sideNav('hide');
    update();
  });

  $('.cart').on('click', (e) => {
    $('.button-collapse').sideNav('hide');
    if (state.cartItems.length > 0) {
      state.screenView = "Cart";
      update();
    }
  });

  $('a.login').on('click', function(e) {
    $('.errorText').text('');
    $('#input-user').val('');
    $('#input-pass').val('');
    $('.button-collapse').sideNav('hide');
    $('.modal').modal();
    update();
  });

  $('a.logout').on('click', function(e) {
    location.reload();
  });

}
