
// second template

var dataprefix = document.currentScript.getAttribute('data-prefix');
var templateprefix1 = document.currentScript.getAttribute('data-templateprefix1');  //about
var templateprefix2 = document.currentScript.getAttribute('data-templateprefix2'); //events
var templateprefix3 = document.currentScript.getAttribute('data-templateprefix3'); //intro

var prefix1 = "#";
var prefix2 = "-template";
var sheetname1 = dataprefix.concat("-",templateprefix1); //mozhaysk-about
var sheetname2 = dataprefix.concat("-",templateprefix2); //mozhaysk-events
var sheetname3 = dataprefix.concat("-",templateprefix3); //mozhaysk-benefits

var templatename1 = prefix1.concat(templateprefix1,prefix2); //#about-template
var templatename2 = prefix1.concat(templateprefix2,prefix2); //#events-template
var templatename3 = prefix1.concat(templateprefix3,prefix2); //#benefits-template

console.log(templatename1, templatename2, templatename3, sheetname1, sheetname2, sheetname3 );


      var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1L2Mr1hi_1D4o3aKcw3Pdb_CUdg5aDAU1XTPSKFiTHAI&output=html';


  $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         parseNumbers: true } );
      });


	
        
      function showInfo(data, tabletop) {
	      
	
	
        var source1   = $(templatename1).html();   //---changed to about-template
        var template1 = Handlebars.compile(source);
	      
	      var source2   = $(templatename2).html();
        var template2 = Handlebars.compile(source1);
        
        
	     
        $.each( tabletop.sheets(sheetname1).all(), function(i, data1) {       //---changed to about-template
          var html1 = template1(data1);                                        //---changed to about-
          $("#content-aboutlist").append(html1);                                         //---changed to #about-
        });
	      
	     $.each( tabletop.sheets(sheetname2).all(), function(i, data2) {
          var html2 = template2(data2);
          $("#content-eventlist").append(html2);
        });
      }
      
      $.each( tabletop.sheets(sheetname3).all(), function(i, data3) {       //---changed to bemefit-template
          var html3 = template3(data3);                                        
          $("#content-introlist").append(html3);                            
        });


    

