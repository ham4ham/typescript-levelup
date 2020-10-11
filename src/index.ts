import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();
const server = Fastify();
const port = Number(process.env.PORT) || 3000;

server.listen(port, '0.0.0.0', error => {
  if (error) {
    server.log.error('Unable to start fastify server');
    process.exit(1);
  }
  const startMsg = `...server started on port ${port} on ${new Date().toDateString()}`;
  console.log(startMsg);
  server.log.info(startMsg);
});
