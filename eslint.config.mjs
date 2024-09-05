import globals from 'globals'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginSecurity from 'eslint-plugin-security'
import jestPlugin from 'eslint-plugin-jest'
import nodePlugin from 'eslint-plugin-n'

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
    },
  },
  { ignores: ['dist', 'coverage'] },
)

// without typescript support (tseslint.config)
// export default [
//   {
//     files: ['**/*.{js,mjs,cjs,ts}'],
//   },
//   { languageOptions: { globals: globals.node } },
//   { ignores: ['dist', 'coverage'] },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   eslintConfigPrettier,
// ]
