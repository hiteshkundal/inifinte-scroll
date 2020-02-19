require('./mongodb/');
const express = require('express');
const appRouter = require('./routes/app');
const storeImages = require('./third-party-data/storeImages');

const app = express();
const serverPort = process.env.PORT || 5000;
app.use('/', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, *');
    res.setHeader('Access-Control-Max-Age', '7200');
    next();

});
app.use(express.json());
app.use(appRouter);

try {
    setInterval(() => {
        storeImages();
    }, 1 * 60 * 60 * 1000);
} catch (err) {
    console.log(err);
}


app.listen(serverPort, () => {
    console.log(`Server is listening at port ${serverPort}`)
})