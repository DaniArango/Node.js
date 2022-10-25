const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require ('./numeros');
const http = require('http');
const url = require('url');
const fs = require ('fs');


const numeros = [2, 3, 101, 201, 202, 100];

for (const num of numeros) {
    if(num.esPar(num))
        logger.info(`El numero ${num} es par`)
    else
        logger.error(`El numero ${num} no es par`)
}



http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "./pages" + q.pathname + ".html";
    console.log(filename)
    fs.readFile(filename, (err, data) => {
      try {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      } catch (error) {
        fs.readFile("./pages/inicio.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        console.error(error);
        return res.end(data);
      })}
    });
  }).listen(8080);


