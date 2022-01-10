const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: "Ariel"
    });
});

//Registrar un helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texo) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabras.slice(1).toLowerCase();
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});