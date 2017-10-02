'use strict';

const Modal = (update) => {

  $('#login-form').on("change",(e)=> {
    e.preventDefault();
    if($('#input-user').val().length != 0 && $('#input-pass').val().length != 0) {
      $('#login').removeClass("disabled");
    } else {
      $('#login').addClass("disabled");
    }

  });

  $('#login').on('click', function(e) {
    e.preventDefault();
    update();
    for (var user in state.dataBase.users) {
      if ($('#input-user').val() === state.dataBase.users[user].username && $('#input-pass').val() === state.dataBase.users[user].password) {
        state.userOnline = state.dataBase.users[user];
        $('#login').addClass('modal-close');
        $('nav .modal-trigger').text("Cerrar sesión");
        $('.errorText').text('');
        $('nav .modal-trigger').addClass('logout');
        $('.logout').removeClass('modal-trigger');
      } else {
        $('#login').removeClass('modal-close');
        $('.errorText').text('Usuario o contraseña incorrectos');
      }
    }
  });

};
