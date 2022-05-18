$(function () {
    function getPointCategoryName(point, dimension) {
    var series = point.series,
        isY = dimension === 'y',
        axis = series[isY ? 'yAxis' : 'xAxis'];
    return axis.categories[point[isY ? 'y' : 'x']];
}

Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        marginleft:40,
        
        plotBorderWidth: 1
    },


    title: {
        text: 'Employment in various sectors in countries for 2019'
    },

    xAxis: {
        categories: ['Australia', 'Canada', 'Eu & Central Asia', 'Iceland', 'Switzerland', 'UK', 'UAE', 'USA']
    },

    yAxis: {
        categories: ['Agriculture', 'Industry', 'Services'],
        title: null,
        reversed: true
    },

    accessibility: {
        point: {
            descriptionFormatter: function (point) {
                var ix = point.index + 1,
                    xName = getPointCategoryName(point, 'x'),
                    yName = getPointCategoryName(point, 'y'),
                    val = point.value;
                return ix + '. ' + xName + ' percent ' + yName + ', ' + val + '.';
            }
        }
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    tooltip: {
        formatter: function () {
            return '<b>' + getPointCategoryName(this.point, 'x') + '</b> has <br><b>' +
                this.point.value + '</b> % employment in <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
        }
    },

    series: [{
        name: 'Employment in various sectors',
        borderWidth: 1,
        data: [[0, 0, 2.6], [0, 1, 19.4], [0, 2, 77.9],  [1, 0, 1.9], [1, 1, 19.5], [1, 2, 78.5],  [2, 0, 8.6], [2, 1, 25], [2, 2, 66.2],  [3, 0, 3.8], [3, 1, 17.4], [3, 2, 78.6], [4, 0, 3.3], [4, 1, 20.5], [4, 2, 76.4],  [5, 0, 1.1], [5, 1, 18.4], [5, 2, 80.4],  [6, 0,0.1], [6, 1, 35.3], [6, 2, 65.4], [7, 0, 1.66], [7, 1, 18.7], [7, 2, 79.5] ],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        formatter: function () {
                            return this.value.charAt(0);
                        }
                    }
                }
            }
        }]
    }

});
});