const DataStore = require('nedb-promise');
const db = new DataStore({filename:__dirname + '/usersDB', autoload: true});
const users = require('./usersTours.json');

async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} users`);
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();