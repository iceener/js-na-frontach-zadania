module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    extends: ['eslint:recommended', 'plugin:import/recommended', 'eslint-config-prettier'],
    rules: {},
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
};