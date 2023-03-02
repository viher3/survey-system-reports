import Chart from 'chart.js/auto';
import BadSmiley from './Assets/1.png'

console.log(12355)

const labels = ['01/01/2023', '02/01/2023','03/01/2023','04/01/2023','05/01/2023'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Average',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    },{
        label: 'Mode',
        data: [60, 50, 70, 61, 46, 51, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 500)',
        tension: 0.1
    }]
};

const ctx = document.getElementById('render');
const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                ticks: {
                    callback: function(value, index, ticks) {
                        if(value === 55){
                            const imageUrl = new URL(
                                BadSmiley,
                                import.meta.url
                            );
                            console.log(imageUrl)
                            return '<img src="' + imageUrl.pathname + '" />'
                        }

                        console.log(value, index)
                        return '$' + value;
                    }
                }
            }
        }
    },
    plugins: [{
        afterDraw: chart => {
            var ctx = chart.chart.ctx;
            var xAxis = chart.scales['x-axis-0'];
            var yAxis = chart.scales['y-axis-0'];
            xAxis.ticks.forEach((value, index) => {
                var x = xAxis.getPixelForTick(index);
                var image = new Image();
                image.src = images[index],
                    ctx.drawImage(image, x - 12, yAxis.bottom + 10);
            });
        }
    }],
});
