// create map
const map = L.map("mapid").setView([-23.659503, -46.761801], 15);

// create and add titleLayer
//L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
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

function addMarker({ id, name, lat, lng }) {
  // create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}" class="choose-orphanage">
    <img src="/images/arrow-white.svg">
    </a>`
  );

  // create and add marker
  L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll(".orphanages span");
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng,
  };
  addMarker(orphanage);
});
