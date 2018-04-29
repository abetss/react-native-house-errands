module.exports = {
  plugins: ['jsx-a11y', 'import', 'react', 'flowtype', 'prettier'],
  extends: ['prettier', 'prettier/flowtype', 'prettier/react', 'react-app'],
  parser: 'babel-eslint',
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false
    },
    'import/resolver': {
      node: {
        paths: ['./']
      }
    }
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js']
      }
    ],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [
      2,
      {
        order: ['static-methods', 'lifecycle', 'render', 'everything-else']
      }
    ],
    'jsx-a11y/href-no-hash': 0,
    'import/prefer-default-export': 0,
    'no-mixed-operators': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'no-underscore-dangle': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-cond-assign': [2, 'except-parens'],
    'global-require': 0,
    'no-extra-parens': [2, 'functions'],
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'no-nested-ternary': 0,
    quotes: [2, 'double', 'avoid-escape'],
    'arrow-parens': [2, 'as-needed'],
    'function-paren-newline': [0, 'multiline'],
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          some: ['nesting', 'id']
        },
        allowChildren: false
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    /**
     * Flow style
     */
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 0,
    'flowtype/no-weak-types': 0,
    'flowtype/object-type-delimiter': [0, 'comma'],
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': [
      0,
      'always',
      {
        annotateUndefined: 'never'
      }
    ],
    'flowtype/require-valid-file-annotation': [2, 'never'],
    'flowtype/semi': [2, 'always'],
    'flowtype/space-after-type-colon': [
      2,
      'always',
      {
        allowLineBreak: true
      }
    ],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
    /**
     * Imports
     */
    'import/default': 2,
    'import/namespace': 2,
    'import/export': 2,
    'import/no-named-as-default': 0,
    'import/no-mutable-exports': 2,
    'import/no-named-as-default-member': 1,
    'import/first': 2,
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'index', 'sibling'],
        'newlines-between': 'always'
      }
    ],
    'import/newline-after-import': 2,
    'prettier/prettier': [
      'error',
      {
        singleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        parser: 'flow',
        printWidth: 80
      }
    ]
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    jest: true
  },
  globals: {
    done: true
  }
};
