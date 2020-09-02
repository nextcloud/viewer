module.exports = {
	env: {
		jest: true,
		"cypress/globals": true
	},
	extends: [
		"plugin:cypress/recommended"
	],
	rules: {
		'cypress/no-unnecessary-waiting': off
	}
}
