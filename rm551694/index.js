const http = require('http');

const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/html');
 res.end('<h1>Implantação efetuada com sucesso. Bom trabalho!</h1>');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});
