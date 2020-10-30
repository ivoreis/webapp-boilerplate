module.exports = {
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/', '/black-box-tests'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}
