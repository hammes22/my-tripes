import type { CodegenConfig } from '@graphql-codegen/cli'

require('dotenv').config({ path: '.env.local' })

const endpoint = process.env.GRAPHQL_HOST

if (!endpoint) {
  throw new Error('GRAPHQL_HOST não está definido no arquivo .env.local')
}

const config: CodegenConfig = {
  overwrite: true,
  schema: endpoint,
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [
        {
          add: {
            content: '/* eslint-disable */'
          }
        }
      ]
    }
  }
}

export default config
