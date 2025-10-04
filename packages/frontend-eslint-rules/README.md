# ESLint Rules for HeyFrame Frontend

This package provides custom ESLint rules for HeyFrame Frontend projects. These rules help to ensure code quality, promote best practices, and assist in migrating from older code patterns to more modern approaches.

## Installation

```
npm install @heyframe-ag/frontend-eslint-rules --save-dev
```

## Usage

Add the following to your ESLint configuration file (e.g., .eslintrc.js):

```diff
+import frontendRules from '@heyframe-ag/frontend-eslint-rules';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
+  frontendRules,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-this-alias': 'warn',
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off',
      'no-alert': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
    }
  }
];
```

## Rules

- `migrate-plugin-manager`: This rule flags imports from src/plugin-system/plugin.manager and suggests using window.PluginManager instead. It also flags imports from src/plugin-system/plugin.class and suggests using window.PluginBaseClass.
- `no-dom-access-helper`: This rule identifies usages of the DomAccessHelper and suggests using native DOM methods instead.
- `no-http-client`: This rule identifies usages of the HttpClient and suggests using the fetch API instead.
- `no-query-string`: This rule identifies usages of the query-string library and suggests using URLSearchParams instead.