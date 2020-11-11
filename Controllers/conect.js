//coneção ao MySql

async function connect(){
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:luiztools@localhost:3306/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}


async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clientes;');
    return rows;
}
 
module.exports = {selectCustomers}

