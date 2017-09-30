'use strict';

const Footer = (update) => {

  const container = $('<footer class="center"></footer>');
  const pIcons = $('<p></p>');
  const aFacebook = $('<a href="#"></a>');
  const iFacebook = $('<i class="fa fa-facebook" aria-hidden="true"></i>');
  const aTwitter = $('<a href="#"></a>');
  const iTwitter = $('<i class="fa fa-twitter" aria-hidden="true"></i>');
  const aYoutube = $('<a href="#"></a>');
  const iYoutube = $('<i class="fa fa-youtube-play" aria-hidden="true"></i>');
  const aInstagram = $('<a href="#"></a>');
  const iInstagram = $('<i class="fa fa-instagram" aria-hidden="true"></i>');
  const hr = $('<hr>');
  const pCopyright = $('<p class="cyan-dark">© 2017 Don Pepe</p>');

  container.append(pIcons);
  pIcons.append(aFacebook);
  aFacebook.append(iFacebook);
  pIcons.append(aTwitter);
  aTwitter.append(iTwitter);
  pIcons.append(aYoutube);
  aYoutube.append(iYoutube);
  pIcons.append(aInstagram);
  aInstagram.append(iInstagram);
  container.append(hr);
  container.append(pCopyright);

  return container;

}
