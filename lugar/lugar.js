const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encondedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        timeout: 1000,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "8caff4a901mshc9980c4cc7554bdp18878cjsn7264a76ef10d"
        }
    });

    const resp = await instance.get(`?location=${encondedURL}`);

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}