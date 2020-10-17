const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// get values lat and lng from page
data

// create map
const map = L.map('mapid', options).setView([lat, lng], 15);

// create and add titleLayer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoibG9wZXMtbGVhbmRybyIsImEiOiJja2dkN3BnZ2cwY3cwMnFxZjIwYjlkOGFoIn0.NfL0mYq3HUhFo_tZcDp2lQ'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [185, 2],
});

// create and add marker
L.marker([lat, lng], {icon})
    .addTo(map);

/* image gallery*/
function selectImage(event) {
  const button = event.currentTarget;

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  // selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // atualizar o container de imagem
  imageContainer.src = image.src;

  // adicionar a classe .active para este botao
  button.classList.add('active');
}