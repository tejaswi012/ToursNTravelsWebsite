// File tourDBRef.js
const DataStore = require('nedb');
// Create NEDB instance for tourDB links it to disk file
const userDB = new DataStore({filename:__dirname + '/usersDB', autoload: true});
//let tourDB = DataStore.create(__dirname + '/toursDB');
module.exports = userDB; // Shares tourDB instance

