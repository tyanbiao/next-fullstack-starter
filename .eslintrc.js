module.exports = {
  env: {
    es2020: true,
    node: true, // 添加 node.js 的全局变量
    browser: true, // 添加浏览器全局变量
    commonjs: true, // 添加 commonjs 的全局变量
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 允许 jsx
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: ['error', 'never', { beforeStatementContinuationChars: 'always' }], // 不允许使用分号
  },
}
