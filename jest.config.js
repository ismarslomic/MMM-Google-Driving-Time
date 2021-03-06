module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*)\\.test.ts$',
  testPathIgnorePatterns: ['setupJest.js'],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.ts'],
  globals: {
    'ts-jest': {
      tsconfig: {
        sourceMap: true,
        inlineSourceMap: true
      }
    }
  },
  setupFilesAfterEnv: [
    '<rootDir>/setupJest.js'
  ]
}
