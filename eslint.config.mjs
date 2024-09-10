import eslintConfigPrettier from 'eslint-config-prettier'
import jestPlugin from 'eslint-plugin-jest'
import nodePlugin from 'eslint-plugin-n'
import pluginSecurity from 'eslint-plugin-security'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import eslint from '@eslint/js'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  pluginSecurity.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  jestPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node },
    rules: {
      'n/no-missing-import': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  { ignores: ['dist', 'coverage'] },
)
