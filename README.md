This project was bootstrapped using [Create React App](https://github.com/facebookincubator/create-react-app) with Redux for the frontend and uses a Node/Express server with PostgreSQL and Knex on the backend.

After cloning the repo, to get started do an `npm install`.

`npm start` will start up the client on port 3000.

Because this project uses PostgreSQL, you will need to spin up your database for the server to work. I like using [PostgreSQL.app](https://postgresapp.com/). One click and you are up and running on port 5432.

`npm run server` will start up the server on port 8081. The server uses `nodemon` which will automatically restart your server any time changes are saved to server files.

This app also uses the `redux-logger` middleware which console logs changes to state in Chome's devtools. If you find these logs annoying you can remove the logger from `/src/store.js`.
