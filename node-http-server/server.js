const http = require('http');

const server =

    http.createServer((req, res) => {

        console.log(`Someone has requested ${req.url}`);

        if (req.url === '/alumnos') {
            res.write('<h1>Aquí van los alumnos</h1>')
            res.end()
        }
        else if (req.url === '/centros') {
            res.write('Aquí va la lista de centros')
            res.end()
        }
        else {
            res.statusCode = 404;
            res.write('Aquí no hay nada')
            res.end()
        }
    })

server.listen(3000)