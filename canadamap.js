$(function () {

    var chart,
    dataSequence = [
        {
            name: '1995',
            data: [0,47728,8,114,13870,557,1825,3666,29940,115961,646,3397,127]
        }, {
            name: '2000',
            data: [0,39946,11,74,16202,445,1843,4837,36716,149998,874,1747,189]
        }, {
            name: '2005',
            data: [352,43846,10,73,19930,452,2108,8880,42001,133062,1386,2197,352]
        }, {
            name: '2010',
            data: [2611,38947,17,90,30451,699,7554,15839,53930,105020,1986,2292,2611]
        }, {
            name: '2015',
            data: [2263,43242,39,220,57841,1420,15151,17407,55357,120346,4458,5442,2263]
        }, {
            name: '2020',
            data: [1211,34385,21,144,23987,885,7321,10194,33665,107865,2689,3536,1211]
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: 'Immigrants in Canada according to provinces'
        },

        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ca/ca-all.js">Canada</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            minColor: '#E6E6FF',
			maxColor: '#3333FF',
        },

        series: [{
            data: dataSequence[0].data.slice(),
            mapData: Highcharts.maps['countries/ca/ca-all'],
            joinBy: null,
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
    
    chart = $('#container').highcharts();
    
    /**
     * Update the chart. This happens either on updating (moving) the range input,
     * or from a timer when the timeline is playing.
     */
    function update(increment) {
        var input = $('#play-range')[0],
            output = $('#play-output')[0];

        if (increment) {
            input.value = parseInt(input.value) + increment;
        }
        chart.series[0].setData(dataSequence[input.value].data); // Increment dataset (updates chart)
        output.innerHTML = dataSequence[input.value].name; // Output value
        if (input.value >= input.max) { // Auto-pause
            pause($('#play-pause-button')[0]);
        }
    }

    /**
     * Play the timeline.
     */
    function play(button) {
        button.title = 'pause';
        button.className = 'fa fa-pause';
        chart.sequenceTimer = setInterval ( function () {
            update(1);
        }, 500);

    }
    
    /** 
     * Pause the timeline, either when the range is ended, or when clicking the pause button.
     * Pausing stops the timer and resets the button to play mode.
     */
    function pause(button) {
        button.title = 'play';
        button.className = 'fa fa-play';
        clearTimeout(chart.sequenceTimer);
        chart.sequenceTimer = undefined;
    }
    
    /**
     * Toggle play and pause from the button
     */
    $('#play-pause-button').bind('click', function () {
        if (chart.sequenceTimer === undefined) {
            play(this);
        } else {
            pause(this);
        }
    });
    
    /**
     * Update the chart when the input is changed
     */
    $('#play-range').bind('input', function () {
        update();
    });
});