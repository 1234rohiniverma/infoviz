
$(function () {
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Employment statistics for foreign based population amongst seven countries for 2000-2019'
    },
    subtitle: {
        text: 'Source: oecd.stats'
    },
    xAxis: {
        categories: [
            'Australia',
            'Canada',
            'Iceland',
            'New Zealand',
            'Switzerland',
            'UK',
            'USA'],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Employment (%)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '2000',
        data: [64.4,0,86.6,64.3,78.3,61.4,70.5]

    }, {
        name: '2005',
        data: [67.4,0,81.8,67.6,71.7,63.7,70.5]

    }, {
        name: '2010',
        data: [69.2,68.8,74.7,68.3,74.6,66.8,67.6]

    }, {
        name: '2015',
        data: [69.9,70.9,80.7,73.5,76.5,70.5,69.2]

    },
      {
        name:'2019',
        data:[72.3,73.2,82.4,77.8,77.1,74.7,72.2]   
    }]
});
});