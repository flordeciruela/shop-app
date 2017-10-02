'use strict';

const NavFunction = (update) => {
  $('.brand-logo').on('click', (e) => {
    state.screenView = null;
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
