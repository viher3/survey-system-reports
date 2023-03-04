import {smileyChart} from "./Components/SmileyChart.js";

const labels = ['01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023', '05/01/2023'];
const data = {
    labels: labels,
    datasets: [{
        label: 'Average',
        data: [3,2,2,4,5],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }, {
        label: 'Mode',
        data: [5,5,4,4,5],
        fill: false,
        borderColor: 'rgb(75, 192, 500)',
        tension: 0.1
    }]
}

// init
smileyChart('render', data)
