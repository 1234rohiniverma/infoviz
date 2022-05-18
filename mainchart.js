$(function () {

Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: 'Emigration from India to various countries in 2019'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}'
    },
    plotOptions: {
        packedbubble: {
            minSize: '5%',
            maxSize: '100%',
            zMin: 0,
            zMax: 20000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Europe',
        data: [{
            name: 'Germany',
            value: 39103
        }, {
            name: 'Austria',
            value: 1680
        },
        {
            name: "Belgium",
            value: 3326
        },
        {
            name: "Czech Republic",
            value: 1519
        },
        {
            name: "Netherlands",
            value: 12331
        },
        {
            name: "Spain",
            value: 7171
        },
       
        {
            name: "Poland",
            value: 4873
        },
        {
            name: "France",
            value: 4203
        },
       
        {
            name: "United Kingdom",
            value: 92000
        }, 
        {
            name: "Turkey",
            value: 1083
        },
         {
            name: "Italy",
            value: 11966
        },
        
        {
            name: "Finland",
            value: 1432
        },
       
        
        {
            name: "Portugal",
            value: 6267
        },
        {
            name: "Norway",
            value: 2360
        },
        {
            name: "Sweden",
            value: 7366
        },
        {
            name: "Hungary",
            value: 1207
        },
        {
            name: "Switzerland",
            value: 2976
        },
        {
            name: "Denmark",
            value: 2130
        },
        {
            name: "Slovakia",
            value: 3
        },
       
        {
            name: "Estonia",
            value: 296
        },
        {
            name: "Slovenia",
            value: 52
        },
        
        {
            name: "Luxembourg",
            value: 775
        },
       
        
        {
            name: "Latvia",
            value: 831
        }
        ]
   
    }, {
        name: 'Oceania',
        data: [{
            name: "Australia",
            value: 32630
        },
        {
            name: "New Zealand",
            value: 14096
        }
        ]
    }, {
        name: 'North America',
        data: [
        {
            name: "USA",
            value: 53787
        }, {
            name: "Canada",
            value: 85590
        }, {
            name: "Mexico",
            value: 329
        }]
    }]
});
});