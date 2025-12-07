module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  collectCoverageFrom: [
    'examples/**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
};
