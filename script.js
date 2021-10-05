
const url = 'http://data.fixer.io/api/latest?access_key=1fbff9d1946841ca69101835a8a975ac';
fetch(url)
.then(res => res.json())
.then(data => currency(data));



const currency = (data) =>{
    // console.log(data.rates);
    const numbers = Object.values(data.rates);
     numbers.forEach(data =>{
         const currencyNumber = myChart.data.datasets[0].data;
         if (data<600) {
            currencyNumber.push(data*0.0001);
            console.log(currencyNumber);
         }
        
        //  console.log(data);
     })
    for (const key in data.rates) {
    //    console.log(key);
    const currencyName = myChart.data.labels;
    currencyName.push(key);
    
    // console.log(currencyName);
            
    }

}





            // chart
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: [],
          datasets: [{
              label: '# of Votes',
              data: [],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
//   console.log(myChart.data.datasets[0].data);