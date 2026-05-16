const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`
        <h1>Curso Express.js</h1>
        <p>Esto es una aplicacion node.js con express.js</p>
        <p>Corre en el puerto ${PORT}</p>
    `);
});

app.listen(PORT, () =>{
    console.log('Aplicacion funcionando en el puerto ' + PORT);
});