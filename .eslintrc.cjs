module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    rules: {
        "@typescript-eslint/strict-boolean-expressions": [
            2,
            {
                "allowString": false,
                "allowNumber": false
            }
        ],
        "object-curly-spacing": ["error", "always"],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'indent': ['error', 2],
        'no-multi-spaces': ['error']
    },

};