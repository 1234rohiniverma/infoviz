$(function () {


Highcharts.chart('container', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Unemployment % with advanced education'
    },
    subtitle: {
        text: 'Source: databank.worldbank.org'
    },
    xAxis: {
        categories: ['1995', '2000', '2005', '2010', '2015','2020']
    },
    yAxis: {
        title: {
            text: 'Unemployed %'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Unemployed',
        data: [23.4,21.1,23.8,16.7,16.6,15.6]
    }]
});
});