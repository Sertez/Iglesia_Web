var express = require('express');

var app = express();

app.set("view engine","jade");

app.use(express.static("assets"));

app.get("/",function(solicitud,respuesta){
	respuesta.render("index");
});

app.get("/sesiones",function(solicitud,respuesta){
	respuesta.render("sesiones");
});

app.get("/quienes-somos",function(solicitud,respuesta){
	respuesta.render("quienes-somos");
});

app.get("/que-hacemos",function(solicitud,respuesta){
	respuesta.render("que-hacemos");
});

app.get("/nuestro-fundador",function(solicitud,respuesta){
	respuesta.render("nuestro-fundador");
});


app.listen(8080);