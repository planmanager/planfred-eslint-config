/** @type {import('eslint').Linter.Config[]} */
import noRelativeImportPathsPlugin from 'eslint-plugin-no-relative-import-paths'
import vuePlugin from 'eslint-plugin-vue'

import baseConfig from './base.js'

export default [
  ...baseConfig,
  ...vuePlugin.configs['flat/recommended'],
  {
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      // vue rules
      'vue/padding-lines-in-component-definition': ['error'],
      'vue/padding-line-between-blocks': 'error',
      'vue/padding-line-between-tags': [
        'error',
        [
          {
            blankLine: 'always',
            prev: '*',
            next: '*',
          },
        ],
      ],
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/no-undef-components': [
        'error',
        {
          ignorePatterns: [
            'PfIcon',
            'RouterLink',
            'i18n-t',
            'trix-editor',
            'trix-toolbar',
          ],
        },
      ],
      'vue/html-comment-content-newline': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'always',
        },
      ],
      'vue/no-unused-refs': 'error',
      'vue/no-unused-emit-declarations': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-this-in-before-route-enter': 'error',
      'vue/html-comment-indent': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/component-name-in-template-casing': 'warn',
      'vue/multi-word-component-names': 'off',
      'vue/new-line-between-multi-line-property': 2,
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/no-multiple-template-root': 'error',
      'vue/no-unused-properties': [
        'warn',
        {
          groups: ['props', 'data', 'computed', 'methods', 'setup'],
          deepData: false,
          ignorePublicMembers: false,
          unreferencedOptions: [],
        },
      ],
      'vue/no-v-html': 'error',
      'vue/eqeqeq': 'error',

      'vue/array-bracket-newline': ['warn', 'consistent'],
      'vue/array-element-newline': [
        'warn',
        { ArrayExpression: 'consistent' },
      ],
      'vue/arrow-parens': 'off',
      'vue/template-curly-spacing': ['off'],

      // extensions of stylistic rules applied to the template tag
      'vue/array-bracket-spacing': ['error', 'never'],
      'vue/arrow-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'vue/block-spacing': ['error', 'always'],
      'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'vue/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        },
      ],
      'vue/comma-spacing': [
        'error',
        {
          before: false,
          after: true,
        },
      ],
      'vue/dot-location': ['error', 'property'],
      'vue/func-call-spacing': ['error', 'never'],
      'vue/key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      'vue/keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],
      'vue/multiline-ternary': ['error', 'always-multiline'],
      'vue/no-extra-parens': ['error', 'functions'],
      'vue/object-curly-newline': [
        'error',
        {
          multiline: true,
          consistent: true,
        },
      ],
      'vue/object-curly-spacing': ['error', 'always'],
      'vue/object-property-newline': 'error',
      'vue/operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
            '|>': 'before',
          },
        },
      ],
      'vue/space-in-parens': ['error', 'never'],
      'vue/space-infix-ops': 'error',
      'vue/space-unary-ops': [
        'error',
        {
          words: true,
          nonwords: false,
        },
      ],
    },
  },
  {
    // IMPORTANT: These rules should be only applied to components, not pages. That's why we filter the files here
    files: ['src/components/**/*'],
    rules: {
      'vue/match-component-file-name': [
        'error',
        {
          extensions: ['vue'],
          shouldMatchCase: true,
        },
      ],
      'vue/require-name-property': 'error',
    },
  },
  {
    files: ['src/**/*'], // exclude files from root folder
    plugins: {
      noRelativeImportPathsPlugin,
    },
    rules: {
      'noRelativeImportPathsPlugin/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: false,
          rootDir: 'src',
          prefix: '@',
        },
      ],
    },
  },
]
