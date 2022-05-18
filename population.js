$(function () {

Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    accessibility: {
        description: 'The chart describes growing population of India'
        },
    title: {
        text: 'Indian population from 1990-2020'
    },
    subtitle: {
        text: 'Source: <a href="https://databank.worldbank.org/source/jobs#">' +
            'databank.worldbank.org</a>'
    },
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 1990.to 2025.'
        }
    },
    yAxis: {
        title: {
            text: 'Population growth'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat:  '{series.name} <b>{point.y:,.0f}</b><br/>in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1990,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'Indian population',
        data: [
           870133480 ,888054875,	906021106,	924057817,	942204249	,960482795	,978893217,	997405318,	1015974042,	1034539214,	1053050912	,1071477855	,1089807112,	1108027848,	1126135777,	1144118674,	1161977719,	1179681239,	1197146906,	1214270132,	1230980691,	1247236029,	1263065852,	1278562207,	1293859294	,1309053980	,1324171354,1338676785, 1352642280,1366417754,1393409038

        ]
    }]
});
});