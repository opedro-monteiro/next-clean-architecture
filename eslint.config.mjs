import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    '@rocketseat/eslint-config/next',
    'plugin:@tanstack/query/recommended',
    'prettier',
  ),
  prettier,
]

export default eslintConfig
