var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["<20 anos", "20 a 29 anos", "30 a 39 anos", "40 a 49 anos", "50 a 59 anos", "60 anos ou mais"],
        datasets: [{
            label: 'Masculino',
            data: [421.944, 240.221, 108.959, 41.478, 15.238, 4.541],
            backgroundColor: [
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)'
            ],
            borderColor: [
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)',
                'rgba(51, 51, 255, 0.7)'
            ],
            borderWidth: 1
        },
        
        {
        label: 'Feminino',
            data: [509.377, 319.781, 154.777, 64.166, 19.630, 3.118],
            backgroundColor: [
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
                'rgba(255, 51, 255, 0.7)',
            ],
            borderWidth: 1
        },
    
        
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Número de matrículas na educação profissional segundo faixa etária e sexo – Brasil – 2018 (Milhares)'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});