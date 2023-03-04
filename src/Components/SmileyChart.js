import BadSmiley from "../Assets/1_min.png";
import SadSmiley from "../Assets/2_min.png";
import NormalSmiley from "../Assets/3_min.png";
import HappySmiley from "../Assets/4_min.png";
import SuperHappySmiley from "../Assets/5_min.png";
import {Chart} from "chart.js/auto";

export function smileyChart(renderElementId, data) {

    const images = [
        BadSmiley,
        SadSmiley,
        NormalSmiley,
        HappySmiley,
        SuperHappySmiley
    ].map(png => {
        const image = new Image();
        image.src = png;
        return image;
    });

    const ctx = document.getElementById(renderElementId);

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index) {
                            return ''
                        }
                    },
                    suggestedMin: 1,
                    suggestedMax: 6
                }
            }
        },
        plugins: [{
            afterDraw: chart => {
                var ctx = chart.ctx;
                var xAxis = chart.scales.x;
                var yAxis = chart.scales.y;

                yAxis.ticks.forEach((value, index) => {
                    var y = yAxis.getPixelForTick(index);
                    if(images[index]){
                        const xPosition = xAxis.left - 30
                        const yPosition = (index === 0) ? y - 15 : y - (((yAxis.top*2) * index)+10)

                        ctx.drawImage(images[index], xPosition, yPosition);
                        value.label = ''
                    }
                })
            }
        }]
    })
}
