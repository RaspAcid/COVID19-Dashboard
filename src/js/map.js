const { L } = window;

const mapOptions = {
  center: [30, 30],
  zoom: 2,
  layers: [
    new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
      maxZoom: 7,
      minZoom: 2,
    }),
  ],
};

const myMap = L.map('map', mapOptions);

const url = 'https://corona.lmao.ninja/v3/covid-19/countries';

function parseJSON(response) {
  return response.json();
}

function checkResponse(response) {
  if (response.status === 200) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

function getRadius(value) {
  return value * 0.1;
}

function markerClick(obj, info) {
  obj.bindPopup(info).openPopup();
}
fetch(url)
  .then(checkResponse)
  .then(parseJSON)
  .catch((err) => err.message)
  .then((data) => {
    let max = 0;
    data.forEach((country) => {
      if (country.cases > max) {
        max = country.cases;
      }
    });
    data.forEach((country) => {
      const { lat, long } = country.countryInfo;
      const circle = L.circle([lat, long], {
        color: '#cd0a0a',
        fillColor: '#cd0a0a',
        fillOpacity: 0.7,
        radius: getRadius(country.cases, max),
      }).addTo(myMap);

      const today = (new Date()).toUTCString();
      const covidInfo = `<b>${today}</b><br><b>Country: ${country.country}</b><br><b>Cases: ${country.cases}</b><br><b>Deaths: ${country.deaths}</и><br><b>Today cases: ${country.todayCases}</b><br><b>Today Deaths: ${country.todayDeaths}</b>`;

      circle.on('mouseover', () => {
        markerClick(circle, covidInfo);
      });
    });
  });
