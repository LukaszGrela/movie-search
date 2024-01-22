# Movie Search

Sample React project to search movies by title. Consumes the [OMDb API](https://www.omdbapi.com/).

[Live view](https://movie-search.greladesign.co/)

## Used features

- redux (with reduxjs-toolkit)
- router
- styled components
- PHP API proxy to communicate with OMDBAPI and to hide the API key

## Usage

As it relies on PHP to proxy communication, you need some local PHP server to run it, or create an `.env` file with the `REACT_APP_API_KEY=123xyz` set to your OMDb API key and update `src/api.ts` and update the `GATEWAY` to read:

```TypeScript
const GATEWAY = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
```

For deployment, on server, you need to put `.env` file with the `REACT_APP_API_KEY=123xyz` set to your OMDb API key next to the `api/movie-search.php`.

## React + TypeScript + Vite

This project was bootstrapped with [Vite](https://vitejs.dev).

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
