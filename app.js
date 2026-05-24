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

app.post('/form', (req, res) =>{
    const name = req.body.nombre || 'Anónimo';
    const email = req.body.email || 'No proporcionado';

    res.json({
        message: 'Datos recibidos correctamente',
        data: {
            'nombre': name,
            'email': email
        }
    })
});

app.post('/api/data', (req, res) =>{
    const data = req.body;

    if(!data || Object.keys(data).length === 0){
        return res.status(400).json({error: 'No se recibieron datos en el cuerpo de la solicitud'});
    }

    res.status(200).json({
        message: 'Datos recibidos correctamente',
        data: data
    })
})

app.listen(PORT, () =>{
    console.log('Servidor: http://localhost:' + PORT);
});