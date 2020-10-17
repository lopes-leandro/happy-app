// create map
const map = L.map("mapid").setView([-23.659503, -46.761801], 15);

// create and add titleLayer
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
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

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // aplica a classe valid
  document.querySelector(".map-container").classList.remove('invalid');
  document.querySelector(".map-container").classList.add('valid');

  // remover icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

/* upload de fotos */
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limpar o campo clone
  input.value = "";

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}

/* seleção sim/não*/
function toggleSelect(event) {
  // retirar a classe .active dos buttons
  document
    .querySelectorAll(".button-select .active")
    .forEach((button) => button.classList.remove("active"));

  // pegar o botão clicado
  const button = event.currentTarget;

  // colocar a classe  .active
  button.classList.add("active");

  // atualizar o hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  
  // verificar se é sim ou não
  input.value = button.dataset.value;
}

function validate(event) {
  const form = event.currentTarget;
  const lat = form.querySelector("[name=lat]").value;
  
  // validar se lat e lng está vazio  
  if (lat == null || lat == undefined || lat == "") {
    event.preventDefault();
    document.querySelector(".map-container").classList.add('invalid');
    window.scrollTo(0,0);   
  }
}