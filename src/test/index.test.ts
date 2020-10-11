import { setupMockEnv } from './config/setupMockEnv';

setupMockEnv();

const fastifyMock = {
  register: jest.fn(),
  listen: jest.fn((port: number, ipv4: string, cb) => cb()),
  log: {
    error: jest.fn(),
    info: jest.fn(),
  },
};

jest.mock('fastify', () => jest.fn(() => fastifyMock));

test('should setup app and listen on server', async () => {
  await import('../index');

  expect(fastifyMock.register).toHaveBeenCalled();
  expect(fastifyMock.listen).toHaveBeenCalled();
  expect(fastifyMock.log.info).toHaveBeenCalled();
});
