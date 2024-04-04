module.exports = {
    roots: ['<rootDir>/__tests__'],
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testPathIgnorePatterns: [ '/node_modules/', '/dist/'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
    ],
    preset: 'ts-jest',
    verbose: true,
    transform: {
        '.+\\.ts$': 'ts-jest'
    }
}