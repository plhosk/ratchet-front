# Demo App - React/Redux Front End

This is a front-end for [Demo App API Server](https://github.com/plhosk/ratchet-api)

## Instructions

1. `npm install` to install npm packages
1. Ensure API server is running. The API server URL is specified in the file `./app/api.js` (default `http://localhost:3000`)
1. `npm start` to start the app in development mode.
1. Navigate to [http://localhost:8080](http://localhost:8080) to view the app.
1. If you wish to build static production assets to the `dist/` folder, use `npm build`

## Testing

- `npm test`

## Extra Features

- Activate the checkbox labelled "Show Redux Actions In Console" to see Redux actions, payloads and state in real time
- In addition to the user-triggered fetches, the app will fetch items and logs from the API server every 30 seconds
- API functions are handled using `redux-saga`
