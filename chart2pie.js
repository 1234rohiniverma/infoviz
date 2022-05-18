$(function () {

Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Immigration reasons for 2021 in UK including visitors'
    },
    subtitle: {
        text:'Source:Immigration statistics by gov.uk'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Immigrants',
        data: [
            ['Study', 35.0],
            ['Visit', 26],
            
           
            {
                name: 'Work',
                y: 21,
                sliced: true,
                selected: true
            },
            ['Family',6],
            ['Others',13]
        ]
    }]
});
});
