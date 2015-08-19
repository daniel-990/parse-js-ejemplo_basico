window.onload = function (){

	  Parse.initialize("m4WwKqBPBWfMbEbMJPfwjrADjbFvYtaE0UOtc0mR", "M2bWlqKhsx5IGDnwkCypD5drtf1L8IXKYlylAJPv");

	  $("#enviar_ingreso").on('click', function(event) {
	  	event.preventDefault();

	  	var nombre = $("#nombre").val();
	  	var pass = $("#pass").val();
        localStorage.user1 = nombre;

	  	Parse.User.logIn(nombre, pass, {
          success: function(user) {
            console.log("estas logeado");
      	     var nombre = $("#nombre").val("");
	  	     var pass = $("#pass").val("");
	  	     location.href= "home.html";
        },
          error: function(user, error) {
            alert(error.message);
            console.log(error.message);
             var nombre = $("#nombre").val("");
	  	     var pass = $("#pass").val("");
	  	     //location.reload();
          }
        });
	  	
	  });
}