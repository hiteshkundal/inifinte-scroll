const axios = require('axios');
const envVariable = require('../envVariable');

const queryStore = ['people', 'cars', 'nightlife', 'sea', 'couple', 'nature', 'bikes', 'city',
    'fashion', 'celebrity', 'luxury', 'beer', 'minimal', 'lifestyle', 'technology', 'photography', 'travel'];
const maxIndex = queryStore.length - 1;
const randomIndex = Math.floor(Math.random() * (maxIndex));

const randomQuery = queryStore[randomIndex];
const pexelsUrl = `https://api.pexels.com/v1/search?query=${randomQuery}&per_page=50`;

const fetchImages = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: pexelsUrl,
            headers: {
                'Authorization': `Bearer ${envVariable.PEXELS_API_KEY}`
            }
        })
        return response.data;
    } catch (err) {
        return err;
    }
}

module.exports = fetchImages;