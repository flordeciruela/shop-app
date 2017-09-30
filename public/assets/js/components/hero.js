'use strict';

const Hero = (update) => {
  const container = $('<div id="hero" class="valign-wrapper"></div>');
  const row = $('<div class="row white-text"></div>');
  const Title = $('<h1 class="center">'+state.dataBase.name+'</h1>');
  const h3 = $('<h4 class="center">'+state.dataBase.slogan+'</h4>');
  const form = $('<form class="nav-wrapper col s12"></form>');
  const inputGroup = $('<div class="input-field col s10 m6 push-s1 push-m3"></div>');
  const i = $('<i class="material-icons prefix">search</i>');
  const input = $('<input id="icon_prefix" type="text" class="validate">');
  const label = $('<label for="icon_prefix">Buscar</label>');

  container.append(row);
  row.append(Title);
  row.append(h3);
  row.append(form);
  form.append(inputGroup);
  inputGroup.append(i);
  inputGroup.append(input);
  inputGroup.append(label);

  return container;
}
