const DataStore = require('nedb-promise');
const db = new DataStore({filename:__dirname + '/toursDB', autoload: true});
const users = require('./tours.json');

async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();