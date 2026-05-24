require('dotenv').config();

const express = require('express');
const {config} = require('./config');

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.json({
        curso: 'Express y Node.js: APIs RESTful',
        estudiante:'Diego Siciliano',
        edad: 28,
        pais: 'El Salvador',
        puerto: PORT
    })
});

app.get('/users/:id', (req, res) =>{
    const {id} = req.params;
    const userId = req.params.id;
    res.json({id: `Id capturado es: ${id}`});
})

app.get('/search', (req, res) =>{
    try{
        const terms = req.query.termino || 'No especificado';
        const category = req.query.categoria || 'Todas';

        res.json( {
            termino: terms,
            categoria: category
        })
    }catch (error){
        console.error('Error en la busqueda:', error);

        res.status(500).json({
            error: 'Se presento un error en la busqueda',
            codigoError: error.message
        })
    }
})


app.listen(PORT, () =>{
    console.log('Servidor: http://localhost:' + PORT);
});