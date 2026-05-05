import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    ...vue.configs['flat/recommended'],

    prettier,

    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'never'],
            indentation: 'off',
        },
    },
]
