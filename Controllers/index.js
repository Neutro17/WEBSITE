const db = require("./conect");

(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();