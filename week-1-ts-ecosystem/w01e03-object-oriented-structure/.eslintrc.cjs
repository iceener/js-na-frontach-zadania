module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        browser: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    extends: ['eslint:recommended', 'plugin:import/recommended', 'eslint-config-prettier'],
    rules: {},
    globals: {
        document: false
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
};