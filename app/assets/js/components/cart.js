'use strict';

const Cart = (update) => {
  const container = $('<div class="container" id="cart-container"></div>');
  const row = $('<div class="row"></div>');
  const h5 = $('<h5 class="center">ESTAS LLEVANDO</h5>');
  const collection = $('<div class="col s12 l10 offset-l1"></div>');
  const ul = $('<ul class="collection"></ul>');
  const liResult = $('<li class="collection-item"></li>');
  const title = $('<span class="title">Total:</span>');
  const pClean = $('<p></p>');
  const cleanCart = $('<a href="#" class="text-blue lighten-1"><i class="material-icons small">delete</i></a>');
  let suma = 0;
  const payForm = $('<div class="col s12 center"></div>');
  const span = $('<span>Pagar con:</span>');
  const inputCash = $('<input name="pay" type="radio" id="cash" value="Efectivo" checked />');
  const labelCash = $('<label for="cash">Efectivo</label>');
  const inputCard = $('<input name="pay" type="radio" id="card" value="Tarjeta" />');
  const labelCard = $('<label for="card">Tarjeta</label>');
  const btnBox = $('<div class="col s12 center"></div>');
  const btnCheckout = $('<a class="waves-effect waves-light btn center modal-trigger" data-target="payment" href="#payment">Pagar</a>');

  container.append(row);
  row.append(h5);
  row.append(collection);
  collection.append(ul);
  row.append(payForm);
  payForm.append(span);
  payForm.append(inputCash);
  payForm.append(labelCash);
  payForm.append(inputCard);
  payForm.append(labelCard);
  row.append(btnBox);
  btnBox.append(btnCheckout);

  for (let item in state.cartItems) {
    let li = $('<li class="collection-item avatar"></li>');
    let img = $('<img src="assets/images/'+state.cartItems[item].image+'" alt="Imagen '+state.cartItems[item].name+'" class="circle">');
    let title = $('<span class="title">'+state.cartItems[item].name+'</span>');
    let quantity = $('<div>Cantidad: </div>');
    let pRefresh = $('<p></p>');
    let aRefresh = $('<a href="#!">Actualizar precio</a>');
    let inputQuantity = $('<input type="number" name="quantity" id="quantity" min="1" value="'+state.cartItems[item].quantity+'" required>');
    let id = $('<p>Id: '+state.cartItems[item].id+'</p>');
    let priceSpan = $('<span class="secondary-content">S/.'+state.cartItems[item].totalPrice+'</span>');
    let price = state.cartItems[item].price;

    ul.append(li);
    li.append(img);
    li.append(title);
    li.append(quantity);
    quantity.append(inputQuantity);
    quantity.append(pRefresh);
    pRefresh.append(aRefresh);
    li.append(id);
    li.append(priceSpan);
    suma = parseFloat(suma) + (parseFloat(price)*parseFloat(inputQuantity.val()));

    aRefresh.on('click', (e) => {
      state.cartItems[item].quantity = parseInt(inputQuantity.val());
      state.cartItems[item].totalPrice = price * state.cartItems[item].quantity;
      priceSpan.text('S/.'+ parseFloat(state.cartItems[item].totalPrice).toFixed(2));
      suma = 0;
      for (var obj in state.cartItems) {
        suma = suma + (parseFloat(state.cartItems[obj].price) * parseFloat(state.cartItems[obj].quantity));
      }
      priceResult.text('S/.'+ parseFloat(suma).toFixed(2));
      state.totalPrice = suma.toFixed(2);
    });

  }

  state.totalPrice = suma.toFixed(2);
  let priceResult = $('<p class="secondary-content">S/.'+suma.toFixed(2)+'</p>');
  ul.append(liResult);
  liResult.append(pClean);
  pClean.append(cleanCart);
  liResult.append(title);
  liResult.append(priceResult);

  cleanCart.on('click', (e) => {
    state.cartItems = [];
    state.screenView = null;
    state.totalPrice = null;
    $('.cart').parent().addClass('hide');
    $('.empty').removeClass('hide');
    update();
  });

  btnCheckout.on('click', (e) => {
    state.payMethod = $('input:radio[name=pay]:checked').val();
    ModalCart(update);
    $('.modal').modal();
  });

  return container
}

const ModalCart = (update) => {
  const modal = $('<div id="payment" class="modal"></div>');
  const row = $('<div class="row center"></div>');
  const container = $('<div></div>');
  const h5 = $('<h5>Compra realizada!</h5>');
  const btnClose = $('<a href="#!" class="modal-action modal-close waves-effect btn">Cerrar</a>');

  modal.append(row);
  row.append(container);
  container.append(h5);
  container.append(btnClose);

  btnClose.on('click', (e) => {
    state.screenView = null;
    state.cartItems = [];
    state.totalPrice = null;
    $('.cart').parent().addClass('hide');
    $('.empty').removeClass('hide');
    update();
  });

  $('.root').append(modal);
}
