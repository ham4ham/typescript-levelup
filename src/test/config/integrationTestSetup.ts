import Fastify from 'fastify';
import startup from '../../index';
import { setupMockEnv } from './setupMockEnv';

export const integrationTestSetup = () => {
  setupMockEnv();
  const fastify = Fastify();

  beforeAll(async () => {
    await fastify.register(startup);
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
  });

  return fastify;
};
