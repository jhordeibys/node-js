//creando constante de modulo http
const http = require('http');



// creando servidor
const server = http.createServer((request, response) => { // response no se usa?
    if(request.url === "/uno") console.log("hola");
    if(request.url === "/amor") console.log("luis");      // aqui podria se cualquier funcion?
    if(request.url === "/gym") console.log("ejercicios");

}); 

// configurar puerto del servidor

server.listen(1222); //server es el nombre de la const?