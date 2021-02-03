module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts|js}'],
    coverageDirectory: "coverage",
    coverageReporters: [
        "lcov",
        "clover",
    ],
    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    modulePathIgnorePatterns: ["dist"],
    testEnvironment: "node",
    testMatch: [
        "**/tests/**/*.test.+(ts|js)"
    ],
    transform: {
        "^.+\\.(ts)$": "ts-jest"
    }
};