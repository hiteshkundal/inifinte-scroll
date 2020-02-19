const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const envVariable = require('../envVariable');
const uri = `mongodb+srv://hiteshkundal:${envVariable.MONGODB_PASSWORD}@cluster0-llyfn.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const mongodbConnection = () => {
    return new Promise((res, rej) => {
        client.connect(err => {
            if (err) {
                console.log(err);
                rej('Not able to connect to db');
                return;
            }
            const collection = client.db("infinite-scrolling").collection("pexels");
            res(collection);
        })
    });
}

module.exports = mongodbConnection;