// File tourDBRef.js
const DataStore = require('nedb');
// Create NEDB instance for tourDB links it to disk file
const tourDB = new DataStore({filename:__dirname + '/toursDB', autoload: true});
//let tourDB = DataStore.create(__dirname + '/toursDB');
module.exports = tourDB; // Shares tourDB instance
