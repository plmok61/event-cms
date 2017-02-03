# Event CMS
### Built with
- [Create React App](https://github.com/facebookincubator/create-react-app)
- Redux
- Node/Express
- PostGreSQL
- Knex

After cloning the repo 
````
npm install
````
Start up the client on port 3000.
````
npm start
````

Because this project uses PostgreSQL, you will need to spin up your database for the server to work. I like using [PostgreSQL.app](https://postgresapp.com/). One click and you are up and running on port 5432.

Once you have PostgreSQL up, type 
````
createdb cms_dev
```` 
to create the database. You can name your database whatever you want but if you decide not to use `cms_dev` make sure your `knexfile.js` reflects the new name.

Start up the server on port 8081. The server uses `nodemon` which will automatically restart your server any time changes are saved to server files.
````
npm run server
```` 

Now go to [http://localhost:3000/create](http://localhost:3000/create) and create your first event!

### Note
This app also uses the `redux-logger` middleware which console logs changes to state in Chome's devtools. If you find these logs annoying you can remove the logger from `/src/store.js`.