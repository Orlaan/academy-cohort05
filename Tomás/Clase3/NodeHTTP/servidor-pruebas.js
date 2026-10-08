// Servidor de pruebas para los ejemplos de cliente.
// Uso: node servidor-pruebas.js          (escucha en el puerto 3000)
//      node servidor-pruebas.js 4000     (escucha en el puerto que le digas)
const http = require('node:http');

const PUERTO = Number(process.argv[2]) || 3000;
const productos = [{ id: 1, nombre: 'Taza', precio: 1500 }];

// Función auxiliar: responde con un objeto convertido a JSON
function responderJSON(res, status, datos) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(datos));
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  console.log(`${new Date().toLocaleTimeString()}  ${req.method} ${req.url}`);

  // GET /productos -> devuelve la lista
  if (req.method === 'GET' && pathname === '/productos') {
    return responderJSON(res, 200, productos);
  }

  // POST /productos -> agrega un producto
  if (req.method === 'POST' && pathname === '/productos') {
    const partes = [];
    for await (const parte of req) partes.push(parte);
    try {
      const nuevo = JSON.parse(Buffer.concat(partes).toString('utf8'));
      nuevo.id = productos.length + 1;
      productos.push(nuevo);
      return responderJSON(res, 201, nuevo);
    } catch {
      return responderJSON(res, 400, { error: 'JSON inválido' });
    }
  }

  // DELETE /productos -> borra el último producto
  if (req.method === 'DELETE' && pathname === '/productos') {
    productos.pop();
    res.writeHead(204);
    return res.end();
  }

  // GET /lento -> tarda 10 segundos en responder
  if (pathname === '/lento') {
    setTimeout(() => res.end('Por fin respondí'), 10000);
    return;
  }

  // GET /datos -> tarda 5 segundos en responder
  if (pathname === '/datos') {
    setTimeout(() => responderJSON(res, 200, { ok: true }), 5000);
    return;
  }

  // GET / -> texto simple
  if (pathname === '/') {
    return res.end('Servidor de pruebas funcionando');
  }

  responderJSON(res, 404, { error: 'No encontrado' });
});

server.listen(PUERTO, () => {
  console.log(`Servidor de pruebas en http://localhost:${PUERTO}`);
  console.log('Rutas: GET/POST/DELETE /productos, GET /lento, GET /datos');
});
