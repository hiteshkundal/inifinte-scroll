const express = require('express');
const mongodbConnection = require('../mongodb');

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    res.send('Hello');
})

appRouter.get('/images/:id', async (req, res) => {
    const reqParams = req.params.id;
    const skipIndex = (reqParams - 1) * 3;
    try {
        const collection = await mongodbConnection();
        const images = await collection.find({}).skip(skipIndex).limit(3).toArray();
        res.send(images)
    } catch (err) {
        res.send(err)
    }
})




module.exports = appRouter