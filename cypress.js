/** @type {import('eslint').Linter.Config[]} */
import cypressPlugin from 'eslint-plugin-cypress/flat'
import noOnlyTestsPlugin from 'eslint-plugin-no-only-tests'
import globals from 'globals'
import tsEslint from 'typescript-eslint'

import baseConfig from './base.js'

export default [
  ...baseConfig,
  ...tsEslint.configs.recommended,
  cypressPlugin.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      noOnlyTestsPlugin,
    },
    languageOptions: {
      parser: tsEslint.parser,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'noOnlyTestsPlugin/no-only-tests': 'error',
    },
  },
]
