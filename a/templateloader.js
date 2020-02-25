
// second template

var dataprefix = document.currentScript.getAttribute('data-prefix');
var templateprefix1 = document.currentScript.getAttribute('data-templateprefix1');  //about
var templateprefix2 = document.currentScript.getAttribute('data-templateprefix2'); //events
var prefix1 = "#";
var prefix2 = "-template";
var sheetname1 = dataprefix.concat("-",templateprefix1); //mozhaysk-about
var sheetname2 = dataprefix.concat("-",templateprefix2); //mozhaysk-events

var templatename1 = prefix1.concat(templateprefix1,prefix2); //#about-template
var templatename2 = prefix1.concat(templateprefix2,prefix2); //#events-template

console.log(templatename1, templatename2, sheetname1, sheetname2 );


      var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1L2Mr1hi_1D4o3aKcw3Pdb_CUdg5aDAU1XTPSKFiTHAI&output=html';


  $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         parseNumbers: true } );
      });


	
        
      function showInfo(data, tabletop) {
	      
	
	
        var source   = $(templatename1).html();   //---changed to about-template
        var template = Handlebars.compile(source);
	      
	var source1   = $(templatename2).html();
        var template1 = Handlebars.compile(source1);
	     
        $.each( tabletop.sheets(sheetname1).all(), function(i, data) {       //---changed to about-template
          var html = template(data);                                        //---changed to about-
          $("#content-aboutlist").append(html);                                         //---changed to #about-
        });
	      
	$.each( tabletop.sheets(sheetname2).all(), function(i, data1) {
          var html1 = template1(data1);
          $("#content-eventlist").append(html1);
        });
      }


    

