import { createServer } from 'http';
import { app } from './app.js'; // Cuando no usamos vite, debemos de colocar la extensión .js del archivo.

// Creamos un puerto para que Render funcione.

const PORT = process.env.PORT || 3030;

// Creamos un servidor de Node

const server = createServer(app);

// Ponemos al server a escuchar en el puerto que acabamos de definir

server.listen(PORT);

server.on('listening', () => {
  console.log('listening from port', PORT);
});
