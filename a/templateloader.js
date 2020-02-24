
// second template
      var public_spreadsheet_url = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1L2Mr1hi_1D4o3aKcw3Pdb_CUdg5aDAU1XTPSKFiTHAI&output=html';


  $(document).ready( function() {
        Tabletop.init( { key: public_spreadsheet_url,
                         callback: showInfo,
                         parseNumbers: true } );
      });
        
      function showInfo(data, tabletop) {
        var source   = $("#about-template").html();   //---changed to about-template
        var template = Handlebars.compile(source);
	      
	var source1   = $("#events-template").html();
        var template1 = Handlebars.compile(source1);
	      // console.log('Slides loaded');

        $.each( tabletop.sheets('about').all(), function(i, data) {       //---changed to about-template
          var html = template(data);                                        //---changed to about-
          $("#content-aboutlist").append(html);                                         //---changed to #about-
        });
	      
	$.each( tabletop.sheets("events").all(), function(i, events) {
          var html1 = template1(events);
          $("#content-eventlist").append(html1);
        });
      }


    

