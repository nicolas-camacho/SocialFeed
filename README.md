# Social Feed

- `npm start` or `yarn start` — This will spawn a development server with a default port of `1234`.
- `npm run build` or `yarn run build` — This will output a production build in the `dist` directory.

The Feed component is completly isolated so can be use on other projects, this will work reciving three props:

```
url: "That refers to the url/json for detching the data",
limit: "This value is for fetching an specific number of post from the url",
interval: "That is the time on milliseconds for update the data",
```

#Play with it

You play with the component on the following plaground: https://socialfeed-playground.netlify.app

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Run tests

You can use `npm run test` or `yarn run test` to run the tests suites
