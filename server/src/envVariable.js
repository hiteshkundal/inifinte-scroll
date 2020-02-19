const dotenv = require('dotenv');
const path = require('path');

const devPath = path.resolve(process.cwd(), './src/.env');


dotenv.config({ path: devPath });


const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;



module.exports = {
    PEXELS_API_KEY,
    MONGODB_PASSWORD
}