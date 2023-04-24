let name = $("#name").text();



$("#submit").click(function(){
	var nombre = $("#digi-name").val();
	nombre = nombre.toUpperCase()
	$("#name").text(nombre)
})