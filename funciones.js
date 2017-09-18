
$(document).ready(function(){

	$("#registrar").click(function(){

	});

//temporal para pruebas, borrar despues
	var estudiantes=[
					{"codigo":"001","nombre":"Hugo Ramirez","nota":90},
					{"codigo":"002","nombre":"Juan Lopez","nota":50},
					{"codigo":"003","nombre":"Nohemi Alonzo","nota":65},
					{"codigo":"004","nombre":"Ivan Alvarado","nota":96},
					{"codigo":"005","nombre":"Samuel Pacay","nota":100},
					{"codigo":"006","nombre":"Paola Ramirez","nota":68},
					{"codigo":"007","nombre":"Josue Lopez","nota":58},
					{"codigo":"008","nombre":"Carlos Medina","nota":84},
					{"codigo":"009","nombre":"Ruth Carranza","nota":53},
					{"codigo":"010","nombre":"Luis Cortez","nota":71}];

//Funcion para Mostrar Estudiantes
	$("#listado").click(function(){
		var a="";
		for(i=0;i<estudiantes.length;i++){
			a+=estudiantes[i].codigo+" - "+estudiantes[i].nombre+" - "+estudiantes[i].nota+"<br>";
		}
		$("#texto1").html(a);
	}); //borrar hasta aqui, y corregir los datos de las funciones de abajo

//funcion para Calcular el Promedio
	$("#promedio").click(function(){
		var b=0;
		for(i=0;i<estudiantes.length;i++){
			b+=(estudiantes[i].nota)/10;
		}
		$("#texto2").html(b.toFixed(2));
	});

//funcion para encontrar el numero mayor y mostrar el nombre
	$("#mayor").click(function(){
		var mayor=estudiantes[0].nota;
		var contador=1;
		var c="";
		while (contador<10) {
			if (estudiantes[contador].nota>mayor) {
				mayor=estudiantes[contador].nota;
				c=estudiantes[contador].nombre;
			}
			contador++;
		}
		$("#texto3").html(c);
	});

//funcion para encontrar la nota menor
	$("#menor").click(function(){
		var menor=estudiantes[0].nota;
		var contador=1;
		var d="";
		while (contador<10) {
			if (estudiantes[contador].nota<menor) {
				menor=estudiantes[contador].nota;
				d=estudiantes[contador].nombre;
			}
			contador++;
		}
		$("#texto4").html(d);
	});

});
