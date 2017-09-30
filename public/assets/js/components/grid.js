'use strict';

const Grid = (update) => {

  const container = $('<div class="container" id="grid"></div>');
  const row = $('<div class="row z-depth-1"></div>');
  const h6 = $('<h6>RECOMENDADOS PARA TI</h6>');

  container.append(row);
  row.append(h6);

  for (let elem in state.dataBase.products) {
    let item = $('<div class="col s6 m4 item-css center"></div>');
    let imgDiv = $('<div class="img-div center"></div>');
    let img = $('<img src="assets/images/'+state.dataBase.products[elem].image+'" class="materialboxed center">');
    let name = $('<h5>'+state.dataBase.products[elem].name+'</h5 >');
    let price = $('<p>S/.'+state.dataBase.products[elem].price+'</p>');
    let stock = $('<p>Stock: '+state.dataBase.products[elem].stock+' unidades</p>');
    let btnAdd = $('<a class="waves-effect waves-light btn modal-trigger" data-id="'+state.dataBase.products[elem].id+'" href="#modal1">Agregar al carrito</a>');
    let iAdd = $('<i class="material-icons right">add</i>');

    row.append(item);
    item.append(imgDiv);
    imgDiv.append(img);
    item.append(name);
    item.append(price);
    item.append(stock);
    item.append(btnAdd);
    btnAdd.append(iAdd);
    img.materialbox();

    btnAdd.on('click', function(e) {
      if (state.userOnline == null) {
        $('.modal').modal();
      } else {
        $('.cart').parent().removeClass('hide');
        $('.empty').addClass('hide');
        btnAdd.attr('href', '#!');
        btnAdd.removeClass('modal-trigger');

        const id = $(this).data('id');
        const [article] = state.dataBase.products.filter(article => article.id == id);
        const [saved] = state.cartItems.filter(saved => saved.id === article.id);

        if (saved) {
          saved.quantity++;
          article.totalPrice = (parseFloat(article.price) * parseFloat(article.quantity)).toFixed(2);
          console.log(article.totalPrice);
        } else {
          article.quantity = 1;
          article.totalPrice = article.price;
          console.log(article.totalPrice);
          state.cartItems.push(article);
        }

        $('.cart-item').text(state.cartItems.length);
        $('.cart-item').addClass("red");
      }
    });
  }

  return container;
}
