const SQL = require('mssql');
var config = require('./dbconfig');

async function getInformacion(){
    try {
        let pool =await SQL.connect(config);
        let info = await pool.request().query("SELECT * FROM CATEGORIA"); 
        //console.log(info.recordset);
        return info.recordset;
    } catch (error) {
        console.log(error);
    }
}

getInformacion();

module.exports= {
    getInformacion : getInformacion
}