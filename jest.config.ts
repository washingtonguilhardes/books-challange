import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

module.exports = async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    moduleFileExtensions: [
      ...defaults.moduleFileExtensions,
      'js',
      'json',
      'jsx',
      'ts',
      'tsx',
      'json',
    ],
    testPathIgnorePatterns: [
      '/node_modules/',
      '/__test__/',
      '/__spec__/',
      '/__mocks__/',
      '/__snapshots__/',
    ],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.(t|j)s', '**/*.(t|j)sx'],
    coverageDirectory: '../coverage',
    coverageReporters: ['lcov'],
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/lib/',
      '/__test__/',
      '/__spec__/',
      '/__mocks__/',
      '/__snapshots__/',
    ],
    rootDir: 'src',
    moduleNameMapper: {
      '^@src/(.*)$': '<rootDir>/$1',
    },
  };
};
