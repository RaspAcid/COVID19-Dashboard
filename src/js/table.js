const tableHeadings = [
  'Total',
  'For Yesterday',
  'Total Per 100 000',
  'For Yesterday Per 100 000',
];

const tableData = document.querySelector('.casesData_table_inner');
const tableHeading = document.querySelector('.casesData_heading_inner');
let i = 0;

function deletePrev() {
  while (tableData.firstChild) {
    tableData.removeChild(tableData.firstChild);
  }
  while (tableHeading.firstChild) {
    tableHeading.removeChild(tableHeading.firstChild);
  }
}

async function switchTable(e) {
  deletePrev();
  let url;
  let res;
  let data;
  if (e.target.classList.contains('fa-caret-left') === true) {
    i -= 1;
    if (i < 0) {
      i = 3;
    }
  }
  if (e.target.classList.contains('fa-caret-right') === true) {
    i += 1;
  }
  if (i === tableHeadings.length) {
    i = 0;
  }
  switch (i) {
    case 0:
      url = 'https://disease.sh/v3/covid-19/all';
      res = await fetch(url);
      data = await res.json();
      tableHeading.insertAdjacentHTML('beforeend', `${tableHeadings[i]}`);
      tableData.insertAdjacentHTML('beforeend',
        `
        <tr>
          <td class="dataName">Cases</td>
          <td class="confirmedCases">${data.cases.toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Deaths</td>
          <td class="confirmedCases">${data.deaths.toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Recovered</td>
          <td class="confirmedCases">${data.recovered.toLocaleString()}</td>
        </tr>
        `);

      break;
    case 1:
      url = 'https://disease.sh/v3/covid-19/all?yesterday=true';
      res = await fetch(url);
      data = await res.json();
      tableHeading.insertAdjacentHTML('beforeend', `${tableHeadings[i]}`);
      tableData.insertAdjacentHTML('beforeend',
        `
        <tr>
          <td class="dataName">Cases</td>
          <td class="confirmedCases">${data.cases.toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Deaths</td>
          <td class="confirmedCases">${data.deaths.toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Recovered</td>
          <td class="confirmedCases">${data.recovered.toLocaleString()}</td>
        </tr>
        `);

      break;
    case 2:
      url = 'https://disease.sh/v3/covid-19/all';
      res = await fetch(url);
      data = await res.json();
      tableHeading.insertAdjacentHTML('beforeend', `${tableHeadings[i]}`);
      tableData.insertAdjacentHTML('beforeend',
        `
        <tr>
          <td class="dataName">Cases</td>
          <td class="confirmedCases">${((data.cases / data.population) * 100000).toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Deaths</td>
          <td class="confirmedCases">${((data.deaths / data.population) * 100000).toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Recovered</td>
          <td class="confirmedCases">${((data.recovered / data.population) * 100000).toLocaleString()}</td>
        </tr>
        `);
      break;
    case 3:
      url = 'https://disease.sh/v3/covid-19/all?yesterday=true';
      res = await fetch(url);
      data = await res.json();
      tableHeading.insertAdjacentHTML('beforeend', `${tableHeadings[i]}`);
      tableData.insertAdjacentHTML('beforeend',
        `
        <tr>
          <td class="dataName">Cases</td>
          <td class="confirmedCases">${((data.cases / data.population) * 100000).toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Deaths</td>
          <td class="confirmedCases">${((data.deaths / data.population) * 100000).toLocaleString()}</td>
        </tr>
        <tr>
          <td class="dataName">Recovered</td>
          <td class="confirmedCases">${((data.recovered / data.population) * 100000).toLocaleString()}</td>
        </tr>
        `);
      break;
    default:
  }
}

async function setTable() {
  const url = 'https://disease.sh/v3/covid-19/all';
  const res = await fetch(url);
  const data = await res.json();
  tableHeading.insertAdjacentHTML('beforeend', `${tableHeadings[i]}`);
  document.querySelectorAll('.table-arrow').forEach((el => {
    el.addEventListener('click', switchTable);
  }));
  tableData.insertAdjacentHTML('beforeend',
    `
  <tr>
    <td class="dataName">Cases</td>
    <td class="confirmedCases">${data.cases.toLocaleString()}</td>
  </tr>
  <tr>
    <td class="dataName">Deaths</td>
    <td class="confirmedCases">${data.deaths.toLocaleString()}</td>
  </tr>
  <tr>
    <td class="dataName">Recovered</td>
    <td class="confirmedCases">${data.recovered.toLocaleString()}</td>
  </tr>
  `);
}

setTable();
