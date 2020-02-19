const fetchImages = require('./fetchImages');
const mongodbConnection = require('../mongodb');


const storeImages = async () => {
    try {
        const images = await fetchImages();
        if (!images || images.photos.length === 0) {
            return;
        }
        const collection = await mongodbConnection();
        await collection.deleteMany({});
        await collection.insertMany(images.photos)
    } catch (err) {
        return err;
    }
}

module.exports = storeImages;


