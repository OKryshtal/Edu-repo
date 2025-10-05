import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: { globals: globals.browser }
    },

    pluginJs.configs.recommended,

    {
        plugins: {
            unicorn: eslintPluginUnicorn,
            '@stylistic': stylistic
        },
        name: 'best practices rules',
        files: ['**/*.js'],
        rules: {
            ...pluginJs.configs.recommended.rules,
            semi: ['error', 'always'],
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1
                }
            ],
            'max-len': [
                'warn',
                {
                    code: 140,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true
                }
            ],
            'brace-style': ['warn'],
            'comma-dangle': ['error', 'never'],
            'no-multiple-empty-lines': ['error', { max: 2 }],
            'no-trailing-spaces': ['error', { skipBlankLines: false }],
            'eol-last': ['error', 'always'],
            'no-var': ['error'],
            'prefer-const': 'error',
            'one-var-declaration-per-line': ['error', 'initializations'],
            'keyword-spacing': ['error', { before: true, after: true }],
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase'
                }
            ],
            'comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/quotes': ['warn', 'single'],
            '@stylistic/space-before-blocks': ['error', 'always'],
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/comma-spacing': ['error', { before: false, after: true }],
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }]
        }
    },

    // інтеграція з Prettier
    {
        plugins: {
            prettier: eslintPluginPrettier
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    trailingComma: 'none',
                    singleQuote: true,
                    tabWidth: 4,
                    printWidth: 140
                }
            ]
        }
    },

    // має бути останнім, щоб вимкнути конфліктуючі ESLint-правила
    eslintConfigPrettier
];
