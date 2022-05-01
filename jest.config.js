module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*)\\.test.ts$',
  testPathIgnorePatterns: ['setupJest.js'],
  setupFilesAfterEnv: ['<rootDir>/setupJest.js'],
  collectCoverageFrom: ['./src/**/*.ts']
}
