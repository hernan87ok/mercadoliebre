const express = require ('express');
const app = express();

app.listen(3030, () => {

    console.log('Servidor corriendo OK');
}

);
const path = require ('path');

app.use(express.static('public'));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
