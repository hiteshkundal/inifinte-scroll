const fetchImages = require('./fetchImages');
const mongodbConnection = require('../mongodb');


const storeImages = async () => {
    try {
        const images = await fetchImages();
        const collection = await mongodbConnection();
        await collection.insertMany(images.photos)
    } catch (err) {
        console.log(err)
    }
}

module.exports = storeImages;


