const headings = [
  'Total Cases',
  'Total Deaths',
  'Total Recovered',
  'Cases for yesterday',
  'Deaths for yesterday',
  'Recovered for yesterday',
  'Total Cases per 100 000',
  'Total Deaths per 100 000',
  'Total Recovered per 100 000',
  'Cases for yesterday per 100 000',
  'Deaths for yesterday per 100 000',
  'Recovered for yesterday per 100 000',
];

const dataTable = document.querySelector('.countryData_table_inner');
const dataHeading = document.querySelector('.countryData_heading_inner');
let i = 0;

function deletePrev() {
  while (dataTable.firstChild) {
    dataTable.removeChild(dataTable.firstChild);
  }
  while (dataHeading.firstChild) {
    dataHeading.removeChild(dataHeading.firstChild);
  }
}

async function switchData(e) {
  deletePrev();
  let url;
  let res;
  let data;
  if (e.target.classList.contains('fa-caret-left') === true) {
    i -= 1;
    if (i < 0) {
      i = 11;
    }
  }
  if (e.target.classList.contains('fa-caret-right') === true) {
    i += 1;
  }
  if (i === headings.length) {
    i = 0;
  }
  switch (i) {
    case 0:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.cases.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 1:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=deaths';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.deaths.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 2:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=recovered';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.recovered.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 3:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.todayCases.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 4:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayDeaths';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.todayDeaths.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 5:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayRecovered';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${el.todayRecovered.toLocaleString()}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 6:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=casesPerOneMillion';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.cases / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 7:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=deathsPerOneMillion';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr>
        <td class="countryRow"><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.deaths / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 8:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=recoveredPerOneMillion';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.recovered / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 9:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.todayCases / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 10:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayDeaths';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.todayDeaths / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    case 11:
      url = 'https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayRecovered';
      res = await fetch(url);
      data = await res.json();
      dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
      data.forEach((el) => {
        dataTable.insertAdjacentHTML('beforeend',
          `
      <tr class="countryRow">
        <td><img src='${el.countryInfo.flag}'></td>
        <td class="confirmedCases">${((el.todayRecovered / el.population) * 100000).toFixed(3)}</td>
        <td>${el.country}</td>
      </tr>`);
      });
      break;
    default:
  }
}

async function getCases() {
  const url = 'https://disease.sh/v3/covid-19/countries?yesterday=false&sort=cases';
  const res = await fetch(url);
  const data = await res.json();
  dataHeading.insertAdjacentHTML('beforeend', `${headings[i]}`);
  document.querySelectorAll('.data-arrow').forEach((el => {
    el.addEventListener('click', switchData);
  }));
  data.forEach((el) => {
    dataTable.insertAdjacentHTML('beforeend',
      `
  <tr class="countryRow">
    <td><img src='${el.countryInfo.flag}'></td>
    <td class="confirmedCases">${el.cases.toLocaleString()}</td>
    <td>${el.country}</td>
  </tr>`);
  });
}

getCases();
