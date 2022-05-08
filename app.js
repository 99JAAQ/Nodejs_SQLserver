const bodyParser = require("body-parser");
const express = require("express");
const cors = require('cors');

var app = express();
var router = express.Router();

const dbInformacion = require("./dbInformacion");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

//Inicio

app.use('/API',router);

router.route('/dbInformacion').get((request,response)=>{
    dbInformacion.getInformacion().then(result=>{
        response.json(result);
    })
})

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Informacion iniciando en puerto "+ port );


/* const config = require("./dbconfig");

const rest = new (require('rest-mssql-nodejs'))({
    user: config.user,
    password: config.password,
    server:config.server,
    database:config.database
})

setTimeout(async()=>{
    const result = await rest.executeQuery('select * from CATEGORIA');
    console.log(result.data)
},1500) */