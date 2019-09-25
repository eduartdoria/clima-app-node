const { argv } = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(dir) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(dir);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`
    } catch (err) {
        return `No se pudo determinar el cima de ${dir}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)