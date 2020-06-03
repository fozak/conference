	var url;
	var id;
	var j=1;
	var x = load(); 
	
function load() {
	$('div[data-loader]').each(function() {
		url=$(this).attr("data-loader");
		id=$(this).attr("id");
    		var tmp_j = j++;
    		 $.get(url, function(data){
			 //$('#'+tmp_j).html(data);
 			//$('#'+tmp_j).append(data);
			 $(data).insertAfter($('#'+tmp_j));

			 });
	});
};
