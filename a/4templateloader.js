
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

console.log(templatename1, templatename2, templatename3, sheetname1, sheetname2, sheetname3, sheetname4, sheetname4 );


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
          $("#content-aboutlist").append(html1);                                         //---changed to #about-
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
          $("#content-menulist").append(html4);     
	      
	console.log(html4 );
        });
	      
      }


    
