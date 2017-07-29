$(document).foundation()



function submitForm() {
	var obj = {
		Email: $("#emailfield").val(),
		Name: $("#namefield").val(),
		Text: $("#textfield").val()
	}
	
	$.post( "/form", obj, function(resp) {
	  // $( ".result" ).html( data );

	console.log(resp)
	});	
}




