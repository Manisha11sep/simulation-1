const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')
const massive = require('massive');
require('dotenv').config()
const PORT=4000
const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );


app.get( '/api/inventory',controller.getAll );
app.post('/api/product', controller.create);
app.delete('/api/product/:id', controller.delete);


app.listen(PORT, ()=> console.log(`you are running on : ${PORT}`))