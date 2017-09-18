
$(document).ready(function(){

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

	$("#listado").click(function(){
		var a="";
		for(i=0;i<estudiantes.length;i++){
			a+=estudiantes[i].codigo+" - "+estudiantes[i].nombre+" - "+estudiantes[i].nota+"<br>";
		}
		$("#texto1").html(a);
	});

});



	

//Funcion para mostrar el Listado de Estudiantes
	

//Funcion para calcular el Promedio
	function promedio(){
		var b=0;
		for(i=0;i<estudiantes.length;i++){
			b+=(estudiantes[i].nota)/10;
		}
		document.getElementById("texto2").innerHTML="El Promedio es de <br>"+b.toFixed(2);
	}

// Funcion para encontrar el numero mayor y mostrar el nombre
	function mayor(){
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
		document.getElementById("texto3").innerHTML="El Mejor Estudiante es: <br>"+c;
	}

//Funcion para encontrar el numero menor y mostrar el nombre
	function menor(){
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
		document.getElementById("texto4").innerHTML="El Peor Estudiante es: <br>"+d;
	}
