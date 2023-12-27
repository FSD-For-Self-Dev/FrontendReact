module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'prettier',
  ],
	parserOptions: {
		project: ['./tsconfig.json', './tsconfig.node.json']
	},
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', 'react-refresh'],
  rules: {
		'react/require-default-props': 'off',
		'import/prefer-default-export': 'off',
		'react/jsx-props-no-spreading': 'off',
		'object-shorthand': 'off',
		'no-restricted-exports': 'off',
		'react/no-unused-prop-types': 'off',
		'react/function-component-definition': 'off',
		'react/button-has-type': 'off',
		'no-console': 'off',
		'react/no-array-index-key': 'off',
		'no-return-assign': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'@typescript-eslint/no-shadow': 'off',
		'no-param-reassign': 'off',
		'jsx-a11y/control-has-associated-label': 'off',
		'import/no-extraneous-dependencies': 'off',
'@typescript-eslint/prefer-nullish-coalescing': 'off'
	},
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
		node: {
			allowModules: ['@vitejs/plugin-react', 'vite', 'vite-plugin-svgr', 'vite-plugin-checker']
		}
  },
};
