
// second template

var datamenuitem = document.currentScript.getAttribute('data-menuitem');
var datamenuitemvalue = document.currentScript.getAttribute('data-menuitemvalue');
var datamenuitemorder = document.currentScript.getAttribute('data-menuitemorder');  //order
var templateprefix2 = document.currentScript.getAttribute('data-templateprefix2'); //events


//var templatename1 = prefix1.concat(templateprefix1,prefix2); //#about-template


console.log(datamenuitem, datamenuitemorder);


   
  $(document).ready( function() {
      	var item = document.getElementById(datamenuitem);
	item.value = datamenuitemvalue;
      });


	
     
