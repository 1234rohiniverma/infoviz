$(function () {
Highcharts.chart('container', {

    chart: {
        type: 'lollipop'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
        }
    },

    legend: {
        enabled: false
    },

    subtitle: {
        text: '1990-2020'
    },

    title: {
        text: 'Indian emigrants throughout years'
    },
    subtitle:{
        text:'Source:UN DESA, 2020'
    },

    tooltip: {
        shared: true
    },

    xAxis: {
        type: 'category'
    },

    yAxis: {
        title: {
            text: 'Population'
        }
    },

    series: [{
        name: 'Population',
        data: [{
            name: '1990',
            low: 6600000
        }, {
            name: '1995',
            low: 7200000
        }, {
            name: '2000',
            low: 9600000
        }, {
            name: '2010',
            low: 13200000
        }, {
            name: '2015',
            low: 15900000
        }, {
            name: '2020',
            low: 17900000
        }]
    }]

});
});