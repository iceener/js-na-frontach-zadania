module.exports = {
	"parser": "@typescript-eslint/parser",
	"env": {
		"browser": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true,
		},
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"quotes": [2, "double", { avoidEscape: true },
		],
	}
};
