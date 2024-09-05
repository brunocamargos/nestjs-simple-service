import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
  { languageOptions: { globals: globals.node } },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['dist', 'coverage'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
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
