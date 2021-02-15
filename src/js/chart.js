import Chart from 'chart.js';

async function setChart() {
  const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
  const res = await fetch(url);
  const data = await res.json();
  const ctx = document.querySelector('.chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(data.cases),
      datasets: [{
        label: '',
        data: Object.values(data.cases),
        backgroundColor: 'yellow',
        borderColor: 'yellow',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            beginAtZero: true,
            callback: val => `${val / 1000000}M`,
          },
        }],
        xAxes: [{
          ticks: {
            type: 'category',
            maxTicksLimit: 13,
          },
        }],
      },
    },
  });

  const ctx2 = document.querySelector('.chart2').getContext('2d');
  const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: Object.keys(data.deaths),
      datasets: [{
        label: '',
        data: Object.values(data.deaths),
        backgroundColor: '#cd0a0a',
        borderColor: '#cd0a0a',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            beginAtZero: true,
            callback: val => `${val / 1000000}M`,
          },
        }],
        xAxes: [{
          ticks: {
            type: 'category',
            maxTicksLimit: 12,
          },
        }],
      },
    },
  });

  const ctx3 = document.querySelector('.chart3').getContext('2d');
  const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: Object.keys(data.recovered),
      datasets: [{
        label: '',
        data: Object.values(data.recovered),
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            maxTicksLimit: 5,
            beginAtZero: true,
            callback: val => `${val / 1000000}M`,
          },
        }],
        xAxes: [{
          ticks: {
            type: 'category',
            maxTicksLimit: 12,
          },
        }],
      },
    },
  });
}

setChart();
