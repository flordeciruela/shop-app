'use strict';

const StoresList = (update) => {
  const container = $('<div class="container-fluid" id="stores-list"></div>');
  const row = $('<div class="row"></div>');
  const h2 = $('<h5 class="center">ELIGE UNA TIENDA PARA CONSULTAR STOCK</h5>');
  const contentSelect = $('<div class="col s12 l4 offset-l4"></div>');
  const select = $('<select id="storesSelect" class="browser-default"></select>');
  const disabledOpt = $('<option value="">Tienda virtual (Sólo Lima)</option>');

  container.append(row);
  row.append(h2);
  row.append(contentSelect);
  contentSelect.append(select);
  select.append(disabledOpt);

  for (let store in state.dataBase.stores) {
    const storeOpt = $('<option value="'+state.dataBase.stores[store].district+'">'+state.dataBase.stores[store].district+'</option>');
    select.append(storeOpt);
  };

  $('select:not([multiple])').material_select();
  $(document).on('change', '#storesSelect', function(event) {
    state.screenView = "Store";
    state.storeSelected = $(this).val();
    console.log(state.screenView);
    console.log(state.storeSelected);
    update();
  });

  return container;
};
