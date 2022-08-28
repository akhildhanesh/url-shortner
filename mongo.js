const { MongoClient } = require('mongodb');
const { id } = require('./id')

const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

const dbName = 'shortner';
const db = client.db(dbName)
const collection = db.collection('urls')

async function main() {
    await client.connect();
    return 'DataBase Connected';
}

main()
    .then(console.log)
    .catch(console.error)

module.exports = {
    addUrl: (data) => {
        return new Promise(async (resolve, reject) => {
            let shortLink = await id
            await collection.insertOne({ url: data, short: shortLink })
            resolve(shortLink)
        })
    },

    getUrl: (data) => {
        return new Promise(async (resolve, reject) => {
            const result = await collection.find({ short: data }).toArray()
            resolve(result[0][url])
        })
    }
}