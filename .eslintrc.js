module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "no-throw-literal": "off",
    "no-plusplus": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
    "arrow-body-style": "off",
    "no-use-before-define": "off",
    "no-return-await": "off",
    "import/no-extraneous-dependencies": "off",
    "class-methods-use-this": "off",
    "object-curly-newline": "off",
    "react/jsx-filename-extension": "off",
    "no-restricted-globals": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-unescaped-entities": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "linebreak-style": "off",
    "object-property-newline": "off",
    "camelcase": "off",
    "no-new": "off"
  },
};
