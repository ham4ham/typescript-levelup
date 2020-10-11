import fp from 'fastify-plugin';
import fastifyPlugin from 'fastify-plugin';

import { FastifyInstance, FastifyRequest } from 'fastify';

const routes = fp<any>(
  async (fastify: FastifyInstance, opts: any, next: () => void) => {
    fastify.route<any>({
      url: '/',
      method: 'GET',
      handler: async (request: FastifyRequest, reply) => {
        console.warn('hi the route worked');
        reply.send('TypeScript Level Up home');
      },
    });

    next();
  },
);

export default fastifyPlugin(
  (fastify: FastifyInstance, opts: any, next: () => void) => {
    fastify.register(routes);

    next();
  },
);
