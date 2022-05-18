

$(function () {
    // ---------Responsive-navbar-active-animation-----------
function test() {
	var tabsNewAnim = $("#navbarSupportedContent");
	var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
	var activeItemNewAnim = tabsNewAnim.find(".active");
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		top: itemPosNewAnimTop.top + "px",
		left: itemPosNewAnimLeft.left + "px",
		height: activeWidthNewAnimHeight + "px",
		width: activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$("#navbarSupportedContent ul li").removeClass("active");
		$(this).addClass("active");
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			top: itemPosNewAnimTop.top + "px",
			left: itemPosNewAnimLeft.left + "px",
			height: activeWidthNewAnimHeight + "px",
			width: activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () {
		test();
	});
});
$(window).on("resize", function () {
	setTimeout(function () {
		test();
	}, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () {
		test();
	});
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if (path == "") {
		path = "index.html";
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Add active class to target link
	target.parent().addClass("active");
});

// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

const text = ' MIGRANT POPULATION canada australia canada australia migrants india india india immigration migration india india india migration emigration india india india   INTERNATIONAL MIGRANTS were counted globally  world’s total population MIGRANT FLOWS 35– 40 million people MIGRATE EVERY 5 YEARS, according to estimates based on changes to global UN DESA migrant stock data over time. Statistics on annual international migration flows worldwide are not available, as data available for only a limited set of countries. MIGRANT VULNERABILITIES DURING THE COVID-19 PANDEMIC 3 million+ MIGRANTS WERE STRANDED by pandemic-related mobility restrictions in 2020 according to IOM estimates.international migrants employment education Migrants are widely considered to be more vulnerable to the spread of  INTERNATIONAL STUDENTS emigration workers austrlia canada 6 million INTERNATIONAL STUDENTS were counted in 2019 education , up from 2 million in 2000. 4. MIGRANT CONTRIBUTION DURING THE COVID-19 PANDEMIC Employment migration migration immigration employment unemployment education study education study study education33% of doctors WERE FOREIGN BORN in the United Kingdom in 2016. Migrants study  make up a large proportion canada canada australia USA Uk USA UK  Canada Australia Greece India India Immigration Emigration Migration stock employment statistics employmment employed unemployment of the workforce in sectors important for the pandemic response.students employment  Among the 20 OECD countries immigration countries canada australia australia canada india migration and statistics development money  with the highest number of COVID-19 cases international in early 2021, at least 7 countries depend heavily on foreign-born workers in the health-care sector. 169 million MIGRANT WORKERS. 40,000+ DEATHS DURING MIGRATION 11. UNSAFE MIGRATION  migration stock were recorded by IOM between 2014 and 2020, including more than 4,200 in 2020. PUBLIC OPINION ON MIGRANTS DECLINED. POTENTIAL INCREASE IN IMMIGRATION FLOWS managers managers professionals managers professionals managers professionals ',
    lines = text.split(/[,\. ]+/g),
    data = lines.reduce((arr, word) => {
        let obj = Highcharts.find(arr, obj => obj.name === word);
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Migration Statistics - India and OECD countries'
    }
});
});