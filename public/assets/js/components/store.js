'use strict';

const Store = (update) => {
  const [store] = state.dataBase.stores.filter(store => store.district == state.storeSelected);
  const container = $('<div class="container" id="store"></div>');
  const row = $('<div class="row row-items z-depth-1"></div>');
  const title = $('<h4 class="center">Tienda '+store.district+'</h4>');
  const pBack = $('<p class="center"></p>');
  const aBack = $('<a href="#"><i class="material-icons medium back-btn-css">reply</i></a>');
  const collection = $('<div class="row row-collection"></div>');
  const ul = $('<ul class="collection"></ul>');
  const li = $('<li class="collection-item avatar"></li>');
  const img = $('<img src="assets/images/store.jpg" class="circle">');
  const pAddress = $('<p>Dirección: '+store.address+'</p>');
  const pSchedule = $('<p>Horario de atención: '+store.schedule+'</p>');

  container.append(title);
  container.append(pBack);
  pBack.append(aBack);
  container.append(collection);
  collection.append(ul);
  ul.append(li);
  li.append(img);
  li.append(pAddress);
  li.append(pSchedule);
  container.append(row);

  for (let item in store.products) {
    let itemContainer = $('<div class="col s6 m4 item-css items-store center"></div>');
    let imgDiv = $('<div class="img-div center"></div>');
    let img = $('<img src="assets/images/'+store.products[item].image+'" class="materialboxed center">');
    let name = $('<h5>'+store.products[item].name+'</h5>');
    let price = $('<p>S/.'+store.products[item].price+'</p>');
    let stock = $('<p>Stock: '+store.products[item].stock+' unidades</p>');

    row.append(itemContainer);
    itemContainer.append(imgDiv);
    imgDiv.append(img);
    itemContainer.append(name);
    itemContainer.append(price);
    itemContainer.append(stock);
    img.materialbox();
  };

  aBack.on('click', (e) => {
    state.screenView = null;
    state.storeSelected = null;
    update();
  });

  return container;
};
