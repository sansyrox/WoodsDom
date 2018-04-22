var loginEP = 'https://api.darksky.net/forecast/20ef27097d9e655677c46d3bd66d187b/37.8267,-122.4233';

function doThis() {
$.ajax({
		url: loginEP,
		dataType: "jsonp",
		jsonpCallback: "p",
		jsonp: "callback",
        crossDomain: "true",
		success: function (response) {
			if(response){
                console.log(response);
			}
			else {
				alert("Login Failed. Try Again");
			}
		},
		error: function ( jqXHR) {
			var msg = "";
			var jsonValue =  jqXHR.status;
			if (jsonValue === 404) {
				msg = "Login Failed. Try Again";
			}
			else {
				msg = "Some error occurred. Try Again";
			}
			alert(msg);
		}
	});

}