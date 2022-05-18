$(function () {
    // Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Total employment across various countries and sub divison on basis of occupations'
    },
    subtitle: {
        align: 'left',
        text: 'Click the columns to view versions. Source: <a href="https://ilostat.ilo.org/data/" target="_blank">ilostat.ilo.org</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total employment'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} </b> of total<br/>'
    },

    series: [
        {
            name: "Countries",
            colorByPoint: true,
            data: [
                {
                    name: "Australia",
                    y: 12721,                    
                    drilldown: "Australia"
                },
                {
                    name: "Canada",
                    y: 19476,
                    drilldown: "Canada"
                },
                
                {
                    name:"Germany",
                    y: 42709,                    
                    drilldown :"Germany"
                },
                {
                    name: "New Zealand",
                    y: 2569,
                    drilldown: "New Zealand"
                },
                {
                    name: "Switzerland",
                    y: 4756,
                    drilldown: "Switzerland"
                },
                {
                    name: "UK",
                    y: 33689,
                    drilldown: "UK"
                },
                {
                    name: "USA",
                    y: 161547,
                    drilldown: "USA"
                }
            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: "Australia",
                id: "Australia",
                data: [
                    [
                        "Managers",
                         1397
                    ],
                    [
                        "Professionals",
                        2804
                    ],
                    [
                        "Technicians and Associate professionals",
                        1673
                    ],
                    [
                        "Clerical support workers",
                        1218
                    ],
                    [
                        "Service and sales workers",
                        2163
                    ],
                    [
                        "Crafts and related trades workers",
                        1343
                    ],
                    [
                        "Plant and machine operators and assemblers",
                        849
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",                       
                        1272
                    ]
                    
                ]
            },
            {
                name: "Canada",
                id: "Canada",
                data: [
                    [
                        "Managers",
                        1586
                    ],
                    [
                        "Professionals",
                        3856
                    ],
                    [
                        "Technicians and Associate professionals",
                        3320
                    ],
                    [
                        "Clerical support workers",
                        2231
                    ],
                    [
                        "Service and sales workers",
                        3001
                    ],
                    [
                        "Crafts and related trades workers",
                        1983
                    ],
                    [
                        "Plant and machine operators and assemblers",
                        1624
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                        1876
                    ]
                    
                ]
            },
            {
                name: "Germany",
                id: "germany",
                data: [
                    [
                        "Managers",
                        2126		
                    ],
                    [
                        "Professionals",
                        7788
                    ],

                    [
                        "Technicians and Associate professionals",
                        9898	
                    ],

                    [
                        "Clerical support workers",
                        5299
                    ],
                    [
                        "Service and sales workers",
                        5979
                    ],
                    [
                        "Crafts and related trades workers",
                        	5153	
                    ],
                    [
                        "Plant and machine operators and assemblers",
                        2582
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                        3885	
                    ]
                ]
            },
            {
                name: "New Zealand",
                id: "New Zealand",
                data: [
                    [
                        "Managers",
                        352
                    ],
                    [
                        "Professionals",
                        495
                    ],
                    [
                        "Technicians and Associate professionals",
                        327
                    ],
                    [
                        "Clerical support workers",
                        281
                    ],
                    [
                        "Service and sales workers",
                        400
                    ],
                    [
                        "Crafts and related trades workers",
                        232
                    ],
                    [
                        "Plant and machine operators and assemblers",
                         198
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                         284
                    ]
                ]
            },
            {
                name: "Switzerland",
                id: "Switzerland",
                data: [
                    [ "Managers",
                        354
                    ],
                    [
                        "Professionals",
                        1263
                    ],
                    [
                        "Technicians and Associate professionals",
                        816
                    ],
                    [
                        "Clerical support workers",
                        619
                    ],
                    [
                        "Service and sales workers",
                        648
                    ],
                    [
                        "Crafts and related trades workers",
                        515
                    ],
                    [
                        "Plant and machine operators and assemblers",
                        169
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                        372
                    ]

                ]
            },
            {
                name: "UK",
                id: "Uk",
                data: [
                    [
                        "Managers",
                        4000
                    ],
                    [
                        "Professionals",
                        8932
                    ],
                    [
                        "Technicians and Associate professionals",
                        4175
                    ],
                    [
                        "Clerical support workers",
                        3191
                    ],
                    [
                        "Service and sales workers",
                        5893
                    ],
                    [
                        "Crafts and related trades workers",
                        2680
                    ],
                    [
                        "Plant and machine operators and assemblers",
                        1647
                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                         3171
                    ]

                ],
            },
            {
                name:"USA",
                id:"USA",
                data:[
                    [
                        "Managers",
                        17882					
                    ],
                    [
                        "Professionals",
                        36591
                    ],
                    [
                        "Technicians and Associate professionals",
                        23076

                    ],
                    [
                        "Clerical support workers",
                        15983

                    ],
                    [
                        "Service and sales workers",
                        28905

                    ],
                    [
                        "Crafts and related trades workers",
                         13536

                    ],
                    [
                        "Plant and machine operators and assemblers",
                        9311

                    ],
                    [
                        "Elementary occupations and skilled agricultural, forestry and fishery workers",
                        16262
                    ]


                ]
            }
        ]
    }
});
});