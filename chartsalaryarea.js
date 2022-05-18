$(function () {

Highcharts.chart('container', {

    title: { 
        text: 'Salary trend of USA for various occupations from 2010-2020'
    },

    subtitle: {
        text: 'Source: https://ilostat.ilo.org/data/'
    },

    yAxis: {
        title: {
            text: 'Salary of employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: ' Managers ',
        data: [5795.41,5818.62,5846.50,6044.14,6055.53,6165.56,6323.56,6454.19,6568.74,6756.37,7584.90]
    }, {
        name: 'Professionals',
        data: [4868.75,4943.25,5073.03,5130.63,5155.15,5293.79,5431.49,5530.12,5661.68,5878.47,6990.35]
    }, {
        name: 'Technicians and associate professionals',
        data: [3586.23,3722.26,3819.86,3846.16,3915.24,3977.36,4102.50,4230.21,4297.70,4457.18,5521.79]
    }, {
        name: 'Clerical support',
        data: [2576.15,2626.88,2678.47,2728.73,2755.50,2809.95,2885.81,2984.77,3068.43,3145.48,3934.31]
    }, {
        name: ' Service and sales workers',
        data: [2036.41,2071.39,2101.58,2181.18,2200.50,2244.78,2306.84,2397.98,2516.62,2624.80,3580.02]
    },
       {
        name:' Skilled agricultural, forestry and fishery workers',
        data:[2108.63,2125.76,2164.00,2232.50,2142.58,2302.02,2575.89,2680.20,2689.26,2683.55,2963.64]
       }],

    responsive: {
        rules: [{
            condition: {
                maxheight:800,
                maxWidth: 700
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
});