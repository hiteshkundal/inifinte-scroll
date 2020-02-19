const axios = require('axios');
const envVariable = require('../envVariable');

const pexelsUrl = 'https://api.pexels.com/v1/search?query=people'

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