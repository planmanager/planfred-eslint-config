/** @type {import('eslint').Linter.Config[]} */
import vitestPlugin from '@vitest/eslint-plugin'
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests'
import globals from 'globals'

import baseConfig from './base.js'

export default [
  ...baseConfig,
  {
    plugins: {
      noOnlyTestsPlugin,
      vitest: vitestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        // Test globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        beforeAll: 'readonly',
        afterEach: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        // Additional test globals
        assert: 'readonly',
        suite: 'readonly',
        spec: 'readonly',
        context: 'readonly',
        // Chai globals
        should: 'readonly',
      },
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      'vitest/valid-expect': 'off', // Produces too much false positives right now. Try again at some point.
      'vitest/expect-expect': 'off', // Sometimes expect statements are hidden in helper functions.
      'vitest/no-commented-out-tests': 'off',
      'noOnlyTestsPlugin/no-only-tests': 'error',
    },
  },
]
