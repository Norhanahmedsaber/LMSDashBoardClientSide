export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@mui/material)" // add any other packages if necessary
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
