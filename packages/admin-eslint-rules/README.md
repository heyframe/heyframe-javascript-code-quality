# ESLint Rules for HeyFrame Administration

This package provides ESLint rules for the HeyFrame Administration.

## Installation

You can install this package using npm:

```bash
npm install @heyframe-ag/admin-eslint-rules --save-dev
```

## Usage

Add the following to your `.eslintrc.js` file:

```javascript
module.exports = {
    "plugins": [
        "@heyframe-ag/admin-eslint-rules"
    ],
    "rules": {
        "@heyframe-ag/admin-eslint-rules/no-snippet-import": "error",
        "@heyframe-ag/admin-eslint-rules/no-src-import": "error",
        "@heyframe-ag/admin-eslint-rules/no-sw-extension-override": "error",
        "@heyframe-ag/admin-eslint-rules/require-explict-emits": "error",
        "@heyframe-ag/admin-eslint-rules/state-import": "error"
    }
};
```

## Rules

- `no-snippet-import`: Prevents direct import of snippets.
- `no-src-import`: Prevents direct import of `src` files.
- `no-sw-extension-override`: Prevents overriding of `sw-extension` components.
- `require-explict-emits`: Requires explicit emits in components.
- `state-import`: Enforces correct import of state.