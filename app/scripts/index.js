window.onload = function(){

    Parse.initialize("m4WwKqBPBWfMbEbMJPfwjrADjbFvYtaE0UOtc0mR", "M2bWlqKhsx5IGDnwkCypD5drtf1L8IXKYlylAJPv");

$("#login").on('click', function(event){
     event.preventDefault();
     //document.location = "../html/login.html";
     location.href="login.html";
    }); 

$("#enviar").on('click', function(event){
	event.preventDefault();

    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var pass = $("#pass").val();
    var user = new Parse.User();

    user.set("username", nombre);
    user.set("email", correo);
    user.set("password", pass);

    registro();

function registro(){

    user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("los datos se enviaron..");
    var nombre = $("#nombre").val("");
    var correo = $("#correo").val("");
    var pass = $("#pass").val("");
    //document.location = "http://localhost/blog/html/login.html";
    location.href="login.html";
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    //alert("Error:" + " " + error.message);
    alert("informacion incorrecta " + error.message)
    console.log("informacion incorrecta " + error.message)
    var nombre = $("#nombre").val("");
    var correo = $("#correo").val("");
    var pass = $("#pass").val("");
    //location.reload();
  }
});//user.signUp!

}//registro!

});//funcion del boton!

}
