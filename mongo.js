const { MongoClient } = require('mongodb');
const { id } = require('./id')

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'shortner';
const db = client.db(dbName)
const collection = db.collection('urls')

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    
    // the following code examples can be pasted here...

    return 'DataBase Connected';
}

main()
    .then(console.log)
    .catch(console.error)

module.exports = {
    addUrl: (data) => {
        return new Promise(async (resolve, reject) => {
            const insertResult = collection.insertOne({url: data, short: await id})
            resolve(insertResult)
        })
    },

    getUrl: (data) => {
        return new Promise(async (resolve, reject) => {
            const findResult = await collection.find({ short: data }).toArray()
            resolve(findResult[0].url)
        })
    }
}