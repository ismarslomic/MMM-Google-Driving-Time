module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*)\\.test.ts$',
  testPathIgnorePatterns: ['setupJest.js'],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.ts'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        sourceMap: true,
        inlineSourceMap: true
      }
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/setupJest.js']
}
