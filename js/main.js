$(document).ready(function(){
	console.log("Hola Gracias por tu preferencia (Y)");
});

function mostrarAccion(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Accion").hide();
}

function mostrarComedia(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Comedia").hide();
}

function mostrarRomántica(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Romántica").hide();
}

function mostrarInfantil(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Infantil").hide();
}

function mostrarAventura(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Aventura").hide();
}

function mostrarTerror(){
	$(".col-sm-3").show();
	$(".col-sm-3").not(".Terror").hide();
}

function mostrarTodas(){
	$(".col-sm-3").show();
}

