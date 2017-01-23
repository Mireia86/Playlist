$(document).ready(function() {
	
	var Users= function(name, password){
		this.name=name,
		this.password=password
	};

	var user=[];

	$(".login").on("click",function(e){
		event.preventDefault();

		var name=$(".name").val();
		name=name.toString();
		var password=$(".password").val();
		password=password.toString();

		var userNames=new Users(name, password);

		user.push(userNames);
		console.log(user);
window.sessionStorage.setItem('Datos', JSON.stringify(user));
	
	$.ajax({

		type: "GET",
		url:"playlist.jsonp", 
		jsonpCallback: 'callback',
		dataType: 'jsonp', 
		crossDomain:true,

		success: function (resest){
						
			for (var i=0; i<resest.length; i++) {
				var userNames=resest[i].username;
				var userPasswords=resest[i].userpassword;

			if (userNames==name && userPasswords==password) {
				window.location="playList.html"
				
			} else{
				alert("Name or password is incorrect, try again!");
			};
			}

		}
		
	});

	
	});


});