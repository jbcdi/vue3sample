module.exports = {
  root: true,
  parserOptions: { parser: '@typescript-eslint/parser', ecmaFeatures: { jsx: false } },
  env: {
    browser: true,
    es6: true,
    es2021: true,
    node: true
  },
  plugins: ['html', 'n', 'promise', 'unicorn'],
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly'
  },
  ignorePatterns: ['*.min.*', '*.d.ts', 'dist', 'public', 'temp', 'package-lock.json', '!.vscode'],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
    }
  },
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    //'@typescript-eslint/unexpected-constant': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?'
          },
          Function: {
            message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?'
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?'
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
          }
        }
      }
    ],
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': [
      'off',
      2,
      {
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        }
      }
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/quotes': ['off', 'single'],
    '@typescript-eslint/semi': ['off', 'never'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'warn',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
    'space-before-function-paren': 'off',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['off', 'always'],
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': ['off', '1tbs'],
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    complexity: 'off',
    'computed-property-spacing': 'off',
    'constructor-super': 'warn',
    curly: 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    eqeqeq: ['off', 'always'],
    'for-direction': 'error',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star': 'off',
    'generator-star-spacing': 'off',
    'getter-return': 'error',
    'guard-for-in': 'warn',
    'id-blacklist': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/order': 'off',
    indent: 'off',
    'indent-legacy': 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'warn',
    'newline-per-chained-call': 'off',
    'no-arrow-condition': 'off',
    'no-async-promise-executor': 'error',
    'no-bitwise': 'off',
    'no-caller': 'warn',
    'no-case-declarations': 'off',
    'no-class-assign': 'error',
    'no-comma-dangle': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'warn',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'off',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'warn',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'off',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-reserved-keys': 'off',
    'no-self-assign': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'all'
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-space-before-semi': 'off',
    'no-spaced-func': 'off',
    'no-sparse-arrays': 'error',
    'no-tabs': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'off',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'warn',
    'no-useless-catch': 'error',
    'no-useless-escape': 'off',
    'no-var': 'warn',
    'no-whitespace-before-property': 'off',
    'no-with': 'error',
    'no-wrap-func': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'off',
    'one-var': ['warn', 'never'],
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-rest-params': 'off',
    'prefer-const': 'off',
    'prettier/prettier': 'off',
    'quote-props': ['off'],
    quotes: 'off',
    radix: 'warn',
    'require-yield': 'error',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-after-function-name': 'off',
    'space-after-keywords': 'off',
    'space-before-blocks': 'off',
    'space-before-function-parentheses': 'off',
    'space-before-keywords': 'off',
    'space-in-brackets': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-return-throw-case': 'off',
    'space-unary-ops': 'off',
    'space-unary-word-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'use-isnan': 'warn',
    'valid-typeof': 'off',
    'vue/attributes-order': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/experimental-script-setup-vars': 'off',
    'vue/valid-v-slot': 'off',
    'vue/valid-v-on': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/array-bracket-spacing': 'off',
    'vue/arrow-spacing': 'off',
    'vue/block-spacing': 'off',
    'vue/brace-style': 'off',
    'vue/comma-dangle': 'off',
    'vue/comment-directive': 'error',
    'vue/dot-location': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-end-tags': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/html-self-closing': 'off',
    'vue/jsx-uses-vars': 'error',
    'vue/key-spacing': 'off',
    'vue/keyword-spacing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/max-len': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-multi-spaces': 'off',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/object-curly-spacing': 'off',
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/script-indent': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/space-infix-ops': 'off',
    'vue/space-unary-ops': 'off',
    'vue/v-slot-style': 'off',
    'vue/use-v-on-exact': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off'
  }
}
