
// second template

var dataprefix = document.currentScript.getAttribute('data-prefix');
var templateprefix1 = document.currentScript.getAttribute('data-templateprefix1');  //about
var templateprefix2 = document.currentScript.getAttribute('data-templateprefix2'); //events
var templateprefix3 = document.currentScript.getAttribute('data-templateprefix3'); //intro
var templateprefix4 = document.currentScript.getAttribute('data-templateprefix4'); //menu

var prefix1 = "#";
var prefix2 = "-template";
var sheetname1 = dataprefix.concat("-",templateprefix1); //mozhaysk-about
var sheetname2 = dataprefix.concat("-",templateprefix2); //mozhaysk-events
var sheetname3 = dataprefix.concat("-",templateprefix3); //mozhaysk-benefits
var sheetname4 = dataprefix.concat("-",templateprefix4); //mozhaysk-menu

var templatename1 = prefix1.concat(templateprefix1,prefix2); //#about-template
var templatename2 = prefix1.concat(templateprefix2,prefix2); //#events-template
var templatename3 = prefix1.concat(templateprefix3,prefix2); //#benefits-template
var templatename4 = prefix1.concat(templateprefix4,prefix2); //#menu-template

console.log(templatename1, templatename2, templatename3, templatename4, sheetname1, sheetname2, sheetname3, sheetname4 );


      var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1L2Mr1hi_1D4o3aKcw3Pdb_CUdg5aDAU1XTPSKFiTHAI&output=html';


  $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         parseNumbers: true } );
      });


	
        
      function showInfo(data, tabletop) {
	      
	
	
        var source1   = $(templatename1).html();   //---changed to about-template
        var template1 = Handlebars.compile(source1);
	      
	var source2   = $(templatename2).html();
        var template2 = Handlebars.compile(source2);
	      
	var source3   = $(templatename3).html();
        var template3 = Handlebars.compile(source3);
        
        	var source4   = $(templatename4).html();
        var template4 = Handlebars.compile(source4);
        
        
	     
        $.each( tabletop.sheets(sheetname1).all(), function(i, data1) {       //---changed to about-template
          var html1 = template1(data1);                                        //---changed to about-
          $("#content-menulist").append(html1);                                         //---changed to #about-
        });
	      
	     $.each( tabletop.sheets(sheetname2).all(), function(i, data2) {
          var html2 = template2(data2);
          $("#content-eventlist").append(html2);
        });
      
      
      $.each( tabletop.sheets(sheetname3).all(), function(i, data3) {       //---changed to bemefit-template
          var html3 = template3(data3);                                        
          $("#content-introlist").append(html3);     
	      
	
        });
        
        $.each( tabletop.sheets(sheetname4).all(), function(i, data4) {       //---changed to bemefit-template
          var html4 = template4(data4);                                        
          $(templatename4).append(html4);     
	      
	console.log(html4 ); /*log*/
        });
	      
	      
	     /* event.js */

/******************************
[Table of Contents]
1. Vars and Inits
2. IE Check
3. Set Header
4. Init Search
5. Init Menu
******************************/

$(document).ready(function()
{
	"use strict";

	/* 
	1. Vars and Inits
	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	init_ie_check();
	setHeader();
	initSearch();
	initMenu();

	/* 
	2. IE Check
	*/

	function init_ie_check()
	{
		var version = detectIE();
		var logo = $('.logo_text');

		if(version === false)
		{
			
		}
		else if(version >= 12)
		{
			
		}
		else
		{
			logo.removeClass('logo_text_not_ie');
		}
	}

	function detectIE()
	{
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) // IE 10 or older => return version number
		{
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) // IE 11 => return version number
		{
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) // Edge (IE 12+) => return version number
		{
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		// other browser
		return false;
	}

	/* 
	3. Set Header
	*/

	function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 
	3. Init Search
	*/

	function initSearch()
	{
		if($('.header_search').length)
		{
			var search = $('.header_search');
			var panel = $('.search_container');
			search.on('click', function()
			{
				panel.toggleClass('active');
			});
		}
	}

	/* 
	4. Init Menu
	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

});
	      
      }


    
