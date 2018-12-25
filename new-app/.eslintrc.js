module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "camelcase": 0,
      "import/prefer-default-export": 0,
      "jsx-a11y/href-no-hash": "off",
      "jsx-a11y/accessible-emoji": 0,
      "react/forbid-prop-types": 0,
      "react/jsx-no-bind": 0,
      "react/no-danger": 0,
      "object-curly-newline": 0,
      "strict": 0,
      "global-require": 0,
      "no-shadow": 0,
      "padded-blocks": [
        1,
        "never"
      ],
      "no-constant-condition": 0,
      "generator-star-spacing": 0,
      "no-mixed-operators": 0,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "import/extensions": 0,
      "semi": [
        2,
        "never"
      ],
      "comma-dangle": [
        2,
        "never"
      ],
      "no-param-reassign": 0,
      "no-underscore-dangle": [
        0,
        {
          "allow": [
            "__data"
          ]
        }
      ],
      "max-len": [
        2,
        120
      ],
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "react/sort-comp": [
        2,
        {
          "order": [
            "static-methods",
            "lifecycle",
            "render",
            "everything-else"
          ]
        }
      ]
    },
    "globals": {
      "localStorage": false,
      "fetch": false,
      "document": false,
      "window": false,
      "webpackIsomorphicTools": false,
      "ReactClass": false,
      "Style": false,
      "Router": false,
      "Callback": false,
      "Navigate": false,
      "NavigateButtons": true,
      "SyntheticEvent": true,
      "AnimatedValue": false,
      "AnimatedInterpolation": true,
      "requestAnimationFrame": true
    }
  }  