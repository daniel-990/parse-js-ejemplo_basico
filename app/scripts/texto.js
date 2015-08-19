$(document).ready(function() {

	Parse.initialize("m4WwKqBPBWfMbEbMJPfwjrADjbFvYtaE0UOtc0mR", "M2bWlqKhsx5IGDnwkCypD5drtf1L8IXKYlylAJPv");
	NoteObject = Parse.Object.extend("texto");
	var area_t = $("#area_texto");
	var enviar = $("#enviar_nota");
	var salir = $("#salir");

	salir.on('click', function(event){
		event.preventDefault();
		//alert(localStorage);
	var aceptar = confirm("¿estas seguro que quieres salir?");
    if (aceptar == true) {
       location.href="index.html";
       localStorage.clear();
    } else if (aceptar == false) {
       
       //no pasa nada!
    }
	});
	$("h1").html("Hola " + localStorage.user1 + " !!");

	function tomar_notas(){
		var query = new Parse.Query(NoteObject);

		query.find({
			success:function(results){
				console.dir(results);
				var texto_1 = "";
				for (var i = 0, len=results.length; i<len; i++){
					var note = results[i];
					texto_1 += "<p>";
					texto_1 += "<b>"+ " " + note.get("titulo") + "</b><br>";
					//texto_1 += "<b>Written "+note.createdAt + "<br/>";
					texto_1 += "__" + note.get("cuerpo");
					texto_1 += "</p>";
					//user.set("username", nombre);
				};
				//console.log(texto_1);
				$("#area_texto").html(texto_1);
			},
			error:function(error){
				alert("error al cojer los datos");

			}
		})
	}

	enviar.on('click', function(event) {
		event.preventDefault();

		var title = $("#titulo").val();
		var body = $("#cuerpo").val();

		var note = new NoteObject();
		note.save({titulo:localStorage.user1, cuerpo:body}, {
			success:function(object){
				console.log("se guardo");
				$("#titulo").val("");
		        $("#cuerpo").val("");
		        tomar_notas();	
			},
			error:function(object,error) {
				console.log(error);
				alert("no dio resultado");
			}
		});	
	});
	tomar_notas();
});