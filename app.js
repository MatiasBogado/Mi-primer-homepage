let http = require("http");

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    switch(req.url){
        case "/":
            res.end("Bienvenido a mi HOMPAGE!!!");
          break;
        case "/productos":
            res.end("Estos son los PRODUCTOS");
          break;
        case "/consultas":
            res.end("Cual es su consulta?");
          break;
        default:
            res.end("Error, intente de nuevo");
          break;        
    }
    res.end("Terminado")
}).listen(3030,"Localhost");