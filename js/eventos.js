//inicializar jquery//
// $(document).on("ready",function(){

// 	alert("Pagina lista");
// });

var iniciaAPP=function()
{
	var Inicio=function()
	{
		alert("click en el boton inicio");
		console.log("click en inicio :P")
	}
	$("#btnInicio").on("click",Inicio)
}

$(document).on("ready",iniciaAPP);