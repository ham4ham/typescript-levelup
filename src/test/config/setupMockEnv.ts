export const setupMockEnv = () => {
  process.env.PORT = '3000';
  process.env.NODE_ENV = 'development';
  process.env.LOG_LEVEL = 'info';
  process.env.USE_STDOUT = 'true';
};
