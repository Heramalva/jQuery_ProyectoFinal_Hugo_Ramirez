
//Funcion que edita los registros de la tabla 
function editarRegistro(id){
	for(var i=0; i < localStorage.length; i++){
		var clave=localStorage.key(i);
		if(clave==id){
			registro=$.parseJSON(localStorage.getItem(clave));
					
			$("#miCod").val(registro.id);
			$("#miNom").val(registro.nombre);
			$("#miNota").val(registro.nota);
		}
	}
}
//Funcion que elimina los registros de la tabla]
function eliminarRegistro(id){
	localStorage.removeItem(id);
	//Mostrar Tabla
	listarEstudiantes();
}	

//Funcion para mostrar los estudiantes registrados en una tabla
function listarEstudiantes(){
	var tabla="";
	var parrafo1=$("#p1");
			
	tabla+='<table id="tabla">';
	tabla+='<tr>';
	tabla+='<th>ID</th>';
	tabla+='<th>NOMBRE</th>';
	tabla+='<th>NOTA</th>';
	tabla+='<th>EDITAR</th>';
	tabla+='<th>ELIMINAR</th>';
	tabla+='</tr>';
			
	for(var i=0;i<localStorage.length;i++){
		var clave=localStorage.key(i);
		var registro=$.parseJSON(localStorage.getItem(clave));
				
		tabla+='<tr>';
		tabla+='<td id="td1">'+registro.id+'</td>';
		tabla+='<td>'+registro.nombre+'</td>';
		tabla+='<td>'+registro.nota+'</td>';
		tabla+='<td><button id="btnR" onclick="editarRegistro(\''+registro.id+'\');">Editar</button></td>';
		tabla+='<td><button id="btnE" onclick="eliminarRegistro(\''+registro.id+'\');">Eliminar</button></td>';
		tabla+='</tr>';				
	}
		tabla+='</table>';
		$(parrafo1).html(tabla);
	}




$(document).ready(function(){		

	localStorage.clear();
	$("#miCod").focus();
	
	
//Funcion para registrar estudiantes
	$("#btn1").click(function(){
		var id=$("#miCod").val();
		var nombre=$("#miNom").val();
		var nota=$("#miNota").val();
		
				
		if((nombre,nota).length===0){
			return;
		}else{		
		var registro={
			id:id,
			nombre:nombre,
			nota:nota
			}
		}
		
		localStorage.setItem(id, JSON.stringify(registro));
		contador=localStorage.length+1;
		listarEstudiantes();
		alert("!!Alumno Registrado!!");
		restablecer();	
		$("#miCod").focus();	
	});
	//funcion que limpia la pantalla		
	function restablecer(){
		$("#miCod").val("");
		$("#miNom").val("");
		$("#miNota").val("");
	}

//funcion de nota promedio
	$("#btn2").click(function(){
		//Validar para que cuando se haga click al boton no de ningun tipo de resultado
		if(localStorage.length===0){
		return false;
	}else{
		//Correr LocalStorage para que de resultado de nota mas alta
		var suma=0.0;			
		for (var i=0; i < localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));	
			suma += parseInt(registro.nota);
			var prom = suma/localStorage.length ;		
		}
		alert("La nota promedio es: "+ prom.toFixed(2));
	}
	});	
//funcion para la nota mas alta
	$("#btn3").click(function(){
		
		//Validar para que cuando se haga click al boton no de ningun tipo de resultado
		if(localStorage.length===0){
			return false;
		}else{
			//Correr LocalStorage para que de resultado de nota mas alta
			var Nmax = 0;
			for (var i=0;i<localStorage.length; i++){
				var clave=localStorage.key(i);
				var registro=$.parseJSON(localStorage.getItem(clave));				
				if (Nmax<registro.nota){
					Nmax = parseInt(registro.nota);																			
				}
			}
			alert("La nota maxima es: "+ Nmax);
		}
	});

//funcion para la nota mas baja
	$("#btn4").click(function(){
		if(localStorage.length===0){
		return false;
	}else{
		var Nmin = 100;
		for (var i=0; i<localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));
			if (Nmin>registro.nota){
				Nmin = parseInt(registro.nota);
			}
		}
		alert("La nota minima es: " + Nmin);
	}
	});	
	
});